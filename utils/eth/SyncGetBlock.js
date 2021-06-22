class SyncGetBlock {
  onOff = false;
  blockNumber = 12650467;
  timeout = 5000;

  web3SetInterval(web3, blockNumber) {
    let timerId = setInterval(() => {
      new Promise((resolve, reject) => {
        web3.eth
          .getBlock(blockNumber)
          .then((response) => console.log(response))
          .catch((e) => console.log(e));
      });
    }, this.timeout);
    return timerId;
  }
}

module.exports = {
  SyncGetBlock,
};
