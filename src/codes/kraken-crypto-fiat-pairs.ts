import type { KrakenPairs } from '../types'

export const pairList = {
  BTCEUR: 'XXBTZEUR',
  BTCUSD: 'XXBTZUSD',
  BTCGBP: 'XXBTZGBP',
  BTCCHF: 'XBTCHF',
  BTCAUD: 'XBTAUD',
  BTCCAD: 'XXBTZCAD',
  BTCJPY: 'XXBTZJPY',
  ETHEUR: 'XETHZEUR',
  ETHUSD: 'XETHZUSD',
  ETHGBP: 'XETHZGBP',
  ETHCHF: 'ETHCHF',
  ETHAUD: 'ETHAUD',
  ETHCAD: 'XETHZCAD',
  ETHJPY: 'XETHZJPY',
  ADAEUR: 'ADAEUR',
  ADAUSD: 'ADAUSD',
  ADAGBP: 'ADAGBP',
  ADAAUD: 'ADAAUD',
  DOTEUR: 'DOTEUR',
  DOTUSD: 'DOTUSD',
  DOTGBP: 'DOTGBP',
  DOTJPY: 'DOTJPY',
  ATOMEUR: 'ATOMEUR',
  ATOMUSD: 'ATOMUSD',
  ATOMGBP: 'ATOMGBP',
  XRPEUR: 'XXRPZEUR',
  XRPUSD: 'XXRPZUSD',
  XRPGBP: 'XRPGBP',
  XRPAUD: 'XRPAUD',
  XRPCAD: 'XXRPZCAD',
  LTCEUR: 'XLTCZEUR',
  LTCUSD: 'XLTCZUSD',
  LTCGBP: 'LTCGBP',
  LTCAUD: 'LTCAUD',
  LTCJPY: 'XLTCZJPY',
  SOLEUR: 'SOLEUR',
  SOLUSD: 'SOLUSD',
  SOLGBP: 'SOLGBP',
  SOLAUD: 'SOLAUD',
  SOLCAD: 'SOLCAD',
  DOGEEUR: 'XDGEUR',
  DOGEUSD: 'XDGUSD',
  DOGEGBP: 'XDGGBP',
  DOGEAUD: 'XDGAUD',
  DOGECAD: 'XDGCAD',
  POLEUR: 'POLEUR',
  POLUSD: 'POLUSD',
  AVAXEUR: 'AVAXEUR',
  AVAXUSD: 'AVAXUSD',
  BNBEUR: 'BNBEUR',
  BNBUSD: 'BNBUSD',
  TRXEUR: 'TRXEUR',
  TRXUSD: 'TRXUSD',
  LINKEUR: 'LINKEUR',
  LINKUSD: 'LINKUSD',
  LINKGBP: 'LINKGBP',
  LINKAUD: 'LINKAUD',
  LINKJPY: 'LINKJPY',
  UNIEUR: 'UNIEUR',
  UNIUSD: 'UNIUSD',
  BCHEUR: 'BCHEUR',
  BCHUSD: 'BCHUSD',
  BCHGBP: 'BCHGBP',
  BCHAUD: 'BCHAUD',
  BCHJPY: 'BCHJPY',
  XLMEUR: 'XXLMZEUR',
  XLMUSD: 'XXLMZUSD',
  XLMGBP: 'XXLMZGBP',
  FILEUR: 'FILEUR',
  FILUSD: 'FILUSD',
  FILGBP: 'FILGBP',
  SHIBEUR: 'SHIBEUR',
  SHIBUSD: 'SHIBUSD',
} as const satisfies KrakenPairs

/**
 * Returns the Kraken-specific pair code for a given standard pair.
 * For example, input "BTCEUR" will return "XXBTZEUR".
 */
export const findToKrakenPair = (
  pair: keyof typeof pairList,
): typeof pairList[typeof pair] => pairList[pair]

/**
 * Returns the standard pair code for a given Kraken-specific code.
 * For example, input "XXBTZEUR" will return "BTCEUR".
 * If the Kraken code is not found, returns undefined.
 */
export const findFromKrakenPair = (
  rawPair: string,
): keyof typeof pairList | undefined => {
  const entries = Object.entries(pairList) as [
    keyof typeof pairList,
    string,
  ][]

  for (const [standardPair, krakenCode] of entries) {
    if (krakenCode === rawPair) {
      return standardPair
    }
  }

  return undefined
}
