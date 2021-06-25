const ethBlockService = require('../../services/ethBlock');
const watchlistService = require('../../services/watchlist');
const {OptimizeInterval} = require('../OptimizeInterval');
const winston = require('../../config/winston');

class SyncGetBlock {
  constructor(symbol, network, syncing = false, blockNumber, syncDelay) {
    this.symbol = symbol; // such as... BTC, ETC, XLM, XRP, DOGE, AAVE
    this.network = network; // such as... PUBLIC, TESTNET, mainnet, ropsten, kova, simnet
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
      console.log('this.blockNumber => ', this.blockNumber);
      console.log('this.syncing => ', this.syncing);
      console.log('this.syncDelay => ', this.syncDelay);
      console.log('==================');
      try {
        const blockInfo = await web3.eth.getBlock(blockNumber);
        // Error case
        if (!blockInfo || blockInfo.number <= 0) {
          this.syncDelay = OptimizeInterval.addInterval(syncDelay);
          await new Promise((r) => setTimeout(r, this.syncDelay));
          // await OptimizeInterval.sleep(this.syncDelay);
          await ethBlockService.updateBlockIndex(
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
          await ethBlockService.updateBlockIndex(
            'ETH',
            network,
            blockInfo.number,
            syncing,
            this.syncDelay,
          );
          const transactions = blockInfo?.transactions;
          await ethBlockService.updateETHBlockInfo(
            blockInfo.number,
            network,
            transactions,
          );

          // callback for watchlists
          const watchlists = await watchlistService.getWatchlist(
            'ETH',
            network,
          );
          const address = [];
          for (const watchlist of watchlists) {
            address.push(watchlist['address']);
          }
          console.log('address => ', address);

          const promises = [];
          if (transactions && address) {
            transactions.map((tx, index) => {
              promises.push(web3.eth.getTransaction(tx));
            });
            const results = await Promise.all(promises);
            for (const result of results) {
              if (address.includes(result.to.toLowerCase())) {
                console.log(
                  `${result.to.toLowerCase()} in ${result.blockHash}`,
                );
              }
            }

            // for (const transaction of transactions) {
            //   const tx = await web3.eth.getTransaction(transaction);
            //   if (address.includes(tx.to.toLowerCase())) {
            //     console.log(`FOUND ${tx.to.toLowerCase()} in ${tx} !!!`);
            //   }
            // }
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
