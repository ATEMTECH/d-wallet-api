const Global = require('../libs/global');

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

const checkIsSyncing = (symbol, network) =>
  Global.findOne({symbol, network}).lean();

module.exports = {
  updateBlockIndex,
  checkIsSyncing,
};
