const StellarSdk = require('stellar-sdk');
const StellarHDWallet = require('stellar-hd-wallet');
const axios = require('axios');
const cwr = require('../utils/createWebResp');
const xlmUtils = require('../utils/xlm/utils');

const postKey = async (req, res) => {
  try {
    const pair = StellarSdk.Keypair.random();
    return cwr.createWebResp(res, 200, {
      publicKey: pair.publicKey(),
      secretKey: pair.secret(),
    });
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postKey`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const getFeeStats = async (req, res) => {
  try {
    // const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
    const {server} = req;
    const resp = await server.feeStats();
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - getFeeStats`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postMnemonic = async (req, res) => {
  try {
    const mnemonic = StellarHDWallet.generateMnemonic({entropyBits: 128});
    return cwr.createWebResp(res, 200, {mnemonic});
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postMnemonic`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postDecodeMnemonic = async (req, res) => {
  try {
    const {mnemonic, index} = req.body;
    const wallet = StellarHDWallet.fromMnemonic(mnemonic);
    const publicKey = wallet.getPublicKey(index).toString();
    const secretKey = wallet.getSecret(index).toString();
    return cwr.createWebResp(res, 200, {publicKey, secretKey});
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postMnemonic`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postDecodeSecret = async (req, res) => {
  try {
    const {secretKey} = req.body;
    const keypair = StellarSdk.Keypair.fromSecret(secretKey);
    const publicKey = keypair.publicKey();
    return cwr.createWebResp(res, 200, {publicKey});
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postDecodeSecret`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const getBalance = async (req, res) => {
  try {
    const {network, address} = req.query;
    const {server} = req;
    const account = await server.loadAccount(address);
    const {balances} = account;
    return cwr.createWebResp(res, 200, {network, address, balances});
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - getBalance`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const getAccountDetail = async (req, res) => {
  try {
    const {network, address} = req.query;
    const {server} = req;
    const account = await server.loadAccount(address);
    return cwr.createWebResp(res, 200, {network, address, account});
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - getAccountDetail`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postAccount = async (req, res) => {
  try {
    const {server, networkPassphrase} = req;
    const {
      toAddress,
      createFromSecret, // ??????????????? ????????? ?????? ?????????
      startingBalance, // ???????????? ??????
      memo,
      maxTime,
    } = req.body;
    const keypair = StellarSdk.Keypair.fromSecret(createFromSecret);
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase,
    };
    const loadedAccount = await server.loadAccount(keypair.publicKey());
    const transaction = new StellarSdk.TransactionBuilder(
      loadedAccount,
      txOptions,
    )
      .addOperation(
        StellarSdk.Operation.createAccount({
          destination: toAddress,
          startingBalance, // Minimum balance is 1 XLM
        }),
      )
      .addMemo(StellarSdk.Memo.text(memo || 'Create Account'))
      .setTimeout(maxTime || xlmUtils.TIMEOUT)
      .build();
    transaction.sign(keypair);
    const result = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, result);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postAccount`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postPayment = async (req, res) => {
  try {
    const {toAddress, amount, memo, maxTime} = req.body;
    const {asset, server} = req;
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: req.networkPassphrase,
    };
    const keypair = StellarSdk.Keypair.fromSecret(req.body.secretKey);
    const fromAddress = keypair.publicKey();
    const loadedAccount = await server.loadAccount(fromAddress);
    const transaction = new StellarSdk.TransactionBuilder(
      loadedAccount,
      txOptions,
    )
      .addOperation(
        StellarSdk.Operation.payment({
          destination: toAddress,
          asset,
          amount: amount.toString(),
        }),
      )
      .addMemo(memo ? StellarSdk.Memo.text(memo) : StellarSdk.Memo.none())
      .setTimeout(maxTime || xlmUtils.TIMEOUT)
      .build();
    transaction.sign(keypair);
    const resp = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postPayment`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postTrustAsset = async (req, res) => {
  try {
    const {asset, server} = req;
    const {maxTime} = req.body;
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: req.networkPassphrase,
    };
    const keypair = StellarSdk.Keypair.fromSecret(req.body.secretKey);
    const fromAddress = keypair.publicKey();
    const loadedAccount = await server.loadAccount(fromAddress);
    const transaction = new StellarSdk.TransactionBuilder(
      loadedAccount,
      txOptions,
    )
      .addOperation(StellarSdk.Operation.changeTrust({asset}))
      .setTimeout(maxTime || xlmUtils.TIMEOUT)
      .build();
    transaction.sign(keypair);
    const resp = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postTrustAsset`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postChangeTrustAsset = async (req, res) => {
  try {
    const {asset, server} = req;
    const {maxTime, limit} = req.body;
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: req.networkPassphrase,
    };
    const keypair = StellarSdk.Keypair.fromSecret(req.body.secretKey);
    const fromAddress = keypair.publicKey();
    const loadedAccount = await server.loadAccount(fromAddress);
    const transaction = new StellarSdk.TransactionBuilder(
      loadedAccount,
      txOptions,
    )
      .addOperation(StellarSdk.Operation.changeTrust({asset, limit}))
      .setTimeout(maxTime || xlmUtils.TIMEOUT)
      .build();
    transaction.sign(keypair);
    const resp = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postChangeTrustAsset`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const getLastBlock = async (req, res) => {
  try {
    const {serverUrl} = req;
    const resp = await axios.get(`${serverUrl}/ledgers?limit=1&order=desc`);
    const lastBlockNo = resp.data?._embedded.records[0]?.sequence;
    return cwr.createWebResp(res, 200, {lastBlockNo});
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - getLastBlock`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const getTransactions = async (req, res) => {
  try {
    const {serverUrl} = req;
    const {account} = req.query;
    const resp = await axios.get(
      `${serverUrl}/accounts/${account}/transactions?limit=200&order=desc`,
    );
    return cwr.createWebResp(res, 200, resp.data);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - getTransactions`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const getTxId = async (req, res) => {
  try {
    const {serverUrl} = req;
    const {id} = req.query;
    const resp = await axios.get(`${serverUrl}/transactions/${id}`);
    return cwr.createWebResp(res, 200, resp.data);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - getTxId`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postMultiSig = async (req, res) => {
  try {
    const {server, networkPassphrase} = req;
    const {accounts, maxTime} = req.body;
    const rootKeypair = StellarSdk.Keypair.fromSecret(accounts['0'].secretKey);
    const secondaryKeypair = StellarSdk.Keypair.fromSecret(
      accounts['1'].secretKey,
    );
    const loadAccount = await server.loadAccount(
      rootKeypair.publicKey(),
      rootKeypair.sequence,
    );
    const account = new StellarSdk.Account(
      rootKeypair.publicKey(),
      loadAccount.sequence,
    );
    const secondaryAddress = secondaryKeypair.publicKey();
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase,
    };
    const transaction = new StellarSdk.TransactionBuilder(account, txOptions)
      .addOperation(
        StellarSdk.Operation.setOptions({
          signer: {
            ed25519PublicKey: secondaryAddress,
            weight: 1,
          },
        }),
      )
      .addOperation(
        StellarSdk.Operation.setOptions({
          masterWeight: 1, // set master key weight
          lowThreshold: 1,
          medThreshold: 2, // a payment is medium threshold
          highThreshold: 2, // make sure to have enough weight to add up to the high threshold!
        }),
      )
      .setTimeout(maxTime || xlmUtils.TIMEOUT)
      .build();
    // only need to sign with the root signer as the 2nd signer won't be
    // added to the account till after this transaction completes
    transaction.sign(rootKeypair);
    const resp = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postMultiSig`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postMultiSigPayment = async (req, res) => {
  try {
    const {asset, server, networkPassphrase} = req;
    const {accounts, toAddress, amount, memo, maxTime} = req.body;
    const rootKeypair = StellarSdk.Keypair.fromSecret(accounts['0'].secretKey);
    const secondaryKeypair = StellarSdk.Keypair.fromSecret(
      accounts['1'].secretKey,
    );
    const loadedAccount = await server.loadAccount(
      rootKeypair.publicKey(),
      rootKeypair.sequence,
    );
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase,
    };
    const transaction = new StellarSdk.TransactionBuilder(
      loadedAccount,
      txOptions,
    )
      .addOperation(
        StellarSdk.Operation.payment({
          destination: toAddress,
          asset,
          amount: amount.toString(),
        }),
      )
      .addMemo(memo ? StellarSdk.Memo.text(memo) : StellarSdk.Memo.none())
      .setTimeout(maxTime || xlmUtils.TIMEOUT)
      .build();

    // Signing MultiSig
    transaction.sign(rootKeypair);
    transaction.sign(secondaryKeypair);
    const resp = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postMultiSigPayment`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postManageData = async (req, res) => {
  try {
    const {server, networkPassphrase} = req;
    const {secretKey, dataKey, dataValue, memo, maxTime} = req.body;
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: req.networkPassphrase,
    };
    const keypair = StellarSdk.Keypair.fromSecret(secretKey);
    const fromAddress = keypair.publicKey();
    const loadedAccount = await server.loadAccount(fromAddress);
    const transaction = new StellarSdk.TransactionBuilder(
      loadedAccount,
      txOptions,
    )
      .addOperation(
        // Maximum 64 bytes
        // https://developers.stellar.org/docs/start/list-of-operations/#manage-data
        StellarSdk.Operation.manageData({
          name: dataKey,
          value: dataValue, // Data is deleted when dataValue is null
        }),
      )
      .addMemo(memo ? StellarSdk.Memo.text(memo) : StellarSdk.Memo.none())
      .setTimeout(maxTime || xlmUtils.TIMEOUT)
      .build();

    // const unsignedTx = transaction.toEnvelope().toXDR('base64');
    // console.log(unsignedTx);
    transaction.sign(keypair);
    // const signedTx = transaction.toEnvelope().toXDR('base64')
    // const tx = new StellarSdk.Transaction(signedTx, networkPassphrase);
    const resp = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postManageData`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postDecodeEnvelopeXDR = async (req, res) => {
  try {
    // Reference from
    // https://github.com/stellar/js-stellar-sdk/tree/master/docs/reference#handling-responses
    const {envelopeXDR} = req.body;
    const {networkPassphrase} = req;
    // const result = StellarSdk.xdr.TransactionEnvelope.fromXDR(envelopeXDR, 'base64')
    // return cwr.createWebResp(res, 200, result);
    const transaction = new StellarSdk.Transaction(
      envelopeXDR,
      networkPassphrase,
    );
    return cwr.createWebResp(res, 200, transaction);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postDecodeEnvelopeXDR`,
      xlmUtils.parseOperationError(e),
    );
  }
};

const postAccountMerge = async (req, res) => {
  try {
    const {server} = req;
    const {secretKey, destination} = req.body;
    const txOptions = {
      fee: StellarSdk.BASE_FEE,
      networkPassphrase: req.networkPassphrase,
    };
    const keypair = StellarSdk.Keypair.fromSecret(secretKey);
    const fromAddress = keypair.publicKey();
    const loadedAccount = await server.loadAccount(fromAddress);
    const transaction = new StellarSdk.TransactionBuilder(
      loadedAccount,
      txOptions,
    )
      .addOperation(
        // Maximum 64 bytes
        // https://developers.stellar.org/docs/start/list-of-operations/#manage-data
        StellarSdk.Operation.accountMerge({
          destination,
        }),
      )
      .setTimeout(xlmUtils.TIMEOUT)
      .build();
    transaction.sign(keypair);
    const resp = await server.submitTransaction(transaction);
    return cwr.createWebResp(res, 200, resp);
  } catch (e) {
    return cwr.errorWebResp(
      res,
      500,
      `E0000 - postAccountMerge`,
      xlmUtils.parseOperationError(e),
    );
  }
};

module.exports = {
  postKey,
  getFeeStats,
  postMnemonic,
  postDecodeMnemonic,
  postDecodeSecret,
  getBalance,
  getAccountDetail,
  postAccount,
  postPayment,
  postTrustAsset,
  postChangeTrustAsset,
  getLastBlock,
  getTransactions,
  getTxId,
  postMultiSig,
  postMultiSigPayment,
  postManageData,
  postDecodeEnvelopeXDR,
  postAccountMerge,
};
