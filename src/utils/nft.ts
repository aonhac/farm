import Web3 from 'web3'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { provider } from 'web3-core'
import { AbiItem } from 'web3-utils'
import NFTClaimerABI from '../constants/abi/NFTClaimer.json'

export const getContract = (provider: provider, address: string) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(
    (NFTClaimerABI as unknown) as AbiItem,
    address,
  )
  return contract
}