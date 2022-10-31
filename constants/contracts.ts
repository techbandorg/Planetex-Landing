import { AbiItem } from 'web3-utils';
import saleContractAbi from '../constants/saleContractAbi.json'
import Web3 from 'web3';

export const getProviders = (chainId: number | undefined) => {
  const providers = {
    5: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
    97: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
    56: 'https://bsc-dataseed1.binance.org',
    1: 'https://api.mycryptoapi.com/eth'
  }
  return providers[chainId as keyof typeof providers] ?? console.error('chainId is undefined')
}

export const getTokenSaleContractAddress = (chainId: number | undefined) => {
  const addresses = {
    //1: '0xbcd9482dE62E7705cC4C70F8314eDA251127C699',
    1: '0x13b161bCDCfD9850c8DddfFCB90185e4F714A47B',
    5: '0x20f5072712D12C4d3c0f796c34dceCd1f1C59d4B',
    //56: '0xbcd9482dE62E7705cC4C70F8314eDA251127C699',
    56: '0xC4F3b78036b92AFaC1684b719d8184655978c098',
    97: '0x42D2278483A4794200F207251d4204879A3412dd',
  }
  return addresses[chainId as keyof typeof addresses] ?? console.error('chainId is undefined')
};

export const getTokenSaleContract = async(chainId: number | undefined) => {
  const web3 = new Web3(new Web3.providers.HttpProvider(getProviders(chainId)))
  return new web3.eth.Contract(saleContractAbi as AbiItem[], getTokenSaleContractAddress(chainId))
}