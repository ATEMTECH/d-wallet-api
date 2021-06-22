// const ETHBlocks = require('../libs/ethBlocks');
const Global = require('../libs/global');

// const syncGetBlock = (network, number, hash, transactions) =>
//   ETHBlocks.findOneAndUpdate(network, number, hash, transactions)

const increaseBlockIndex = (symbol, network) =>
  Global.findOneAndUpdate(
    {
      symbol,
      network,
    },
    {
      $inc: {
        blockIndex: +1,
      },
    },
    {upsert: true, new: true, useFindAndModify: false},
  );

module.exports = {
  // syncGetBlock,
  increaseBlockIndex,
};
