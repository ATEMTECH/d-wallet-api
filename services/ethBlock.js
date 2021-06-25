const ETHBlock = require('../libs/ethBlock');
const Global = require('../libs/global');

const updateETHBlockInfo = (number, network, transactions) =>
  ETHBlock.findOneAndUpdate(
    {
      number,
      network,
    },
    {
      $set: {
        number,
        network,
        transactions,
      },
    },
    {upsert: true, new: true, useFindAndModify: false},
  ).lean();

const updateBlockIndex = (symbol, network, blockIndex, syncing, syncDelay) =>
  Global.findOneAndUpdate(
    {
      symbol,
      network,
    },
    {
      // $inc: {
      //   blockIndex: +1,
      // },
      $set: {
        blockIndex,
        syncing,
        syncDelay,
      },
    },
    {upsert: true, new: true, useFindAndModify: false},
  ).lean();

module.exports = {
  updateETHBlockInfo,
  updateBlockIndex,
};
