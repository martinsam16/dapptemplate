import Web3 from 'web3';

export const checkAndInstantiateWeb3 = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      alert('No Ethereum browser detected. you should consider trying MetaMask');
      reject(false);
    }
    resolve(true);
  });
};

export const whenChangeAccountThenReloadPage = () => {
  window.ethereum.on('accountsChanged', (accounts) => {
    console.log('account changed');
    window.location.reload();
  });
};
