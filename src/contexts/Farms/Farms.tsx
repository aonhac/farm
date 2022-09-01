import React from 'react'

import { useWallet } from 'use-wallet'
import { Pools } from '../../constants/pools'

// import { bnToDec } from '../../utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const { chainId } = useWallet()

  const farms: Array<Farm> = Pools.filter(pool => (pool.poolAddresses as any)[chainId]).map(
    ({
      poolAddresses,
      name,
      symbol,
      tokenSymbol,
      stakingTokenAddresses,
      acceleratorAddresses,
      isWBNB,
      icon,
      nftSymbol,
      magnification,
    }: any, index) => ({
      pid: index,
      id: symbol.replace('/', '-'),
      name,
      poolAddress: poolAddresses[chainId],
      stakingToken: symbol,
      stakingTokenAddress: stakingTokenAddresses[chainId],
      acceleratorAddress: acceleratorAddresses?.[chainId],
      tokenSymbol,
      earnToken: 'bic',
      earnTokenAddress: '0x8105139F0Be871262C342eEA1FD0011181209217',
      isWBNB,
      icon,
      nftSymbol: nftSymbol ?? '',
      magnification,
    }),
  );

  return (
    <Context.Provider
      value={{
        farms,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
