const switchBaseUrl = (network) => {
  const endpoint = ethereumEndpoint[network];
  if (endpoint) {
    return {custom: false, baseUrl: endpoint};
  }
  if (network.indexOf('http') > -1) {
    return {custom: true, baseUrl: network};
  }
  throw `switchBaseUrl : endpoint error (${network})`;

  /*
  switch (network) {
    default:
      throw 'switchBaseUrl : endpoint error (' + network + ')';
    case 'mainnet':
    case 'ropsten':
    case 'kovan':
    case 'rinkeby':
    case 'goerli':
      return 'https://' + network + '.infura.io/v3/';
  }
  */
};

/*
 * COMMON RPC PORT
 * mainnet: 8545
 * ropsten: 8548
 * kovan:
 * rinkeby: 8547
 * goerli: 8546
 */
const etherscanEndpoints = ['mainnet', 'ropsten', 'kovan', 'rinkeby', 'goerli'];

const defaultGasAvg = 60000;
const defaultGasMin = 21000;
const defaultGasMax = 7000000;
const maxIDValue = 2147483647;
const minIDValue = 0;
const defaultWalletPath = "m/44'/60'/0'/0/";
const ethereumEndpoint = {
  mainnet: 'https://mainnet.infura.io/v3/',
  ropsten: 'https://ropsten.infura.io/v3/',
  kovan: 'https://kovan.infura.io/v3/',
  rinkeby: 'https://rinkeby.infura.io/v3/',
  goerli: 'https://goerli.infura.io/v3/',
};

module.exports = {
  switchBaseUrl,
  etherscanEndpoints,
  defaultGasAvg,
  defaultGasMin,
  defaultGasMax,
  maxIDValue,
  minIDValue,
  defaultWalletPath,
};
