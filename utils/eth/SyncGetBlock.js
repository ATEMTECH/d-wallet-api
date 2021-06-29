const ethBlockService = require('../../services/ethBlock');
const globalService = require('../../services/global');
const watchlistService = require('../../services/watchlist');
const {OptimizeInterval} = require('../OptimizeInterval');
const winston = require('../../config/winston');
const {txInform} = require('../../config/mailConfig');
const {ETHParser} = require('./ETHParser');
const {gmailSend} = require('../mail');
const {postCallback} = require('../callback');
const {txInformHtml} = require('../../views/email');
const {Watchlist} = require('../watchlist/Watchlist');
const {StandardABI} = require('../../config/ETH/StandardTokenABI');

class SyncGetBlock {
  constructor(symbol, network, syncing = false, blockNumber, syncDelay) {
    this.symbol = symbol; // such as... BTC, ETC, XLM, XRP, DOGE, AAVE
    this.network = network; // such as... PUBLIC, TESTNET, mainnet, ropsten, kovan, simnet
    this.syncing = syncing; // Boolean
    this.blockNumber = blockNumber;
    this.syncDelay = syncDelay;
  }

  web3SetInterval = (web3, network, blockNumber) => {
    const syncingBlock = async (
      web3,
      network,
      blockNumber,
      syncing,
      syncDelay,
    ) => {
      winston.log.info(`[ETH/${network}] Block:  ${this.blockNumber}`);
      winston.log.info(
        `[ETH/${network}] Syncing: ${this.syncing}, syncDelay: ${this.syncDelay}`,
      );
      try {
        const blockInfo = await web3.eth.getBlock(blockNumber);
        // Error case
        if (!blockInfo || blockInfo.number <= 0) {
          this.syncDelay = OptimizeInterval.addInterval(syncDelay);
          await new Promise((r) => setTimeout(r, this.syncDelay));
          // await OptimizeInterval.sleep(this.syncDelay);
          await globalService.updateBlockIndex(
            'ETH',
            network,
            blockNumber,
            syncing,
            this.syncDelay,
          );
        } else {
          // Success case
          this.blockNumber += 1;
          this.syncDelay = OptimizeInterval.subInterval(syncDelay);
          await globalService.updateBlockIndex(
            'ETH',
            network,
            blockInfo.number,
            syncing,
            this.syncDelay,
          );
          const transactions = blockInfo?.transactions;

          // save transactions in 'eth_blocks'
          // await ethBlockService.updateETHBlockInfo(
          //   blockInfo.number,
          //   network,
          //   transactions,
          // );

          // callback for watchlists
          const watchlists = await watchlistService.getWatchlist(
            'ETH',
            network,
          );
          const addresses = [];
          for (const watchlist of watchlists) {
            addresses.push(watchlist['address']);
          }
          const promises = [];
          let callbackBody = {};
          if (transactions && addresses) {
            transactions.map((tx) => {
              promises.push(web3.eth.getTransaction(tx));
            });
            const results = await Promise.all(promises);
            for (const result of results) {
              // only create Contract
              if (!result.to) {
                continue;
              }
              const {txFunction, to, value} = ETHParser.inputParser(
                result.input,
              );
              // Send ERC20
              if (
                addresses.includes(result.from.toLowerCase()) &&
                txFunction.startsWith('0xa9059cbb')
              ) {
                // '0xa9059cbb' is payment function in hex
                const contract = result.to; // contract address
                const tokenContract = new web3.eth.Contract(
                  StandardABI,
                  contract,
                );
                const tokenName = await tokenContract.methods.name().call();
                const tokenSymbol = await tokenContract.methods.symbol().call();
                const watchlistDoc = await watchlistService.getWatchListByEmail(
                  result.from.toLowerCase(),
                  network,
                );
                const msg = `Send ${tokenName} (${tokenSymbol}) (ERC20) <br>TxHash: ${
                  result.hash
                } Token Transfer <br> from: ${result.from}, value: ${
                  web3.utils.toBN('0x' + value) / 10 ** 18
                }`;
                const emails = Watchlist.watchlistsToEmails(watchlistDoc);
                emails.map((email, index) =>
                  gmailSend(email, txInform.title, txInformHtml(network, msg)),
                );

                // callbackBody['blockHash'] = result.blockHash;
                // callbackBody['blockNumber'] = result.blockNumber;
                // callbackBody['from'] = result.from;
                // callbackBody['blockHash'] = result.blockHash;
                const callbacks =
                  Watchlist.watchlistsToCallbackUrls(watchlistDoc);
                callbacks.map((url, index) => postCallback(url, {msg}));
              }
              // Receive ERC20
              if (
                addresses.includes(to) &&
                txFunction.startsWith('0xa9059cbb')
              ) {
                const contract = result.to; // contract address
                const tokenContract = new web3.eth.Contract(
                  StandardABI,
                  contract,
                );
                const tokenName = await tokenContract.methods.name().call();
                const tokenSymbol = await tokenContract.methods.symbol().call();
                const watchlistDoc = await watchlistService.getWatchListByEmail(
                  to,
                  network,
                );
                const msg = `Receive ${tokenName} (${tokenSymbol}) (ERC20) <br>TxHash: ${
                  result.hash
                } Token Transfer <br> from: ${result.from}, value: ${
                  web3.utils.toBN('0x' + value) / 10 ** 18
                }`;
                const emails = Watchlist.watchlistsToEmails(watchlistDoc);
                emails.map((email, index) =>
                  gmailSend(email, txInform.title, txInformHtml(network, msg)),
                );
                const callbacks =
                  Watchlist.watchlistsToCallbackUrls(watchlistDoc);
                callbacks.map((url, index) => postCallback(url, {msg}));
              }
              // Send ETH
              if (
                addresses.includes(result.from.toLowerCase()) &&
                result.value > 0
              ) {
                const watchlistDoc = await watchlistService.getWatchListByEmail(
                  result.from.toLowerCase(),
                  network,
                );
                const msg = `Send ETH: ${
                  result.blockNumber
                } / ${result.to.toLowerCase()} in ${result.hash}`;
                const emails = Watchlist.watchlistsToEmails(watchlistDoc);
                emails.map((email, index) =>
                  gmailSend(email, txInform.title, txInformHtml(network, msg)),
                );
                const callbacks =
                  Watchlist.watchlistsToCallbackUrls(watchlistDoc);
                callbacks.map((url, index) => postCallback(url, {msg}));
              }
              // Receive ETH
              if (addresses.includes(result.to.toLowerCase())) {
                const watchlistDoc = await watchlistService.getWatchListByEmail(
                  result.to.toLowerCase(),
                  network,
                );
                const msg = `Receive ETH: ${
                  result.blockNumber
                } / ${result.to.toLowerCase()} in ${result.hash}`;
                const emails = Watchlist.watchlistsToEmails(watchlistDoc);
                emails.map((email, index) =>
                  gmailSend(email, txInform.title, txInformHtml(network, msg)),
                );
                const callbacks =
                  Watchlist.watchlistsToCallbackUrls(watchlistDoc);
                callbacks.map((url, index) => postCallback(url, {msg}));
              }
            }
          }
        }
      } catch (e) {
        winston.log.error(e);
      }
    };

    const timerId = setInterval(() => {
      new Promise((resolve, reject) => {
        syncingBlock(
          web3,
          network,
          this.blockNumber,
          this.syncing,
          this.syncDelay,
        );
      });
    }, this.syncDelay);
    return timerId;

    // let counter = this.syncDelay
    // const myFunction = () => {
    //   counter += 1000;
    //   console.log(counter);
    //   counter = setTimeout(myFunction, this.syncDelay);
    // }
    // counter = setTimeout(myFunction, this.syncDelay);
  };
}

module.exports = {
  SyncGetBlock,
};
