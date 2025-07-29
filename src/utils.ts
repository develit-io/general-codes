import CRYPTO_NETWORKS from './codes/crypto-networks'
import CURRENCIES from './codes/currencies'
import KRAKEN_PAIR_LIST, {
  type KrakenPairCode,
  type KrakenPairKey,
  type KrakenPairs,
} from './codes/kraken-crypto-fiat-pairs'
import type { CryptoNetwork, Currency, CurrencyType } from './types'

export type FormatCurrencyOptions = {
  showSymbol?: boolean
  locale?: string
}

// Currency helper functions
export const getCurrencyByCode = (code: string): Currency | undefined => {
  return CURRENCIES.find((currency) => currency.code === code)
}

export const getCurrenciesByType = (type: CurrencyType): Currency[] => {
  return CURRENCIES.filter((currency) => currency.type === type)
}

export const getFiatCurrencies = (): Currency[] => {
  return CURRENCIES.filter((currency) => currency.type === 'FIAT')
}

export const getCryptoCurrencies = (): Currency[] => {
  return CURRENCIES.filter((currency) => currency.type === 'CRYPTO')
}

export const isFiatCurrency = (code: string): boolean => {
  const currency = getCurrencyByCode(code)
  return currency?.type === 'FIAT'
}

export const isCryptoCurrency = (code: string): boolean => {
  const currency = getCurrencyByCode(code)
  return currency?.type === 'CRYPTO'
}

// Network helper functions
export const getNetworkByCode = (code: string): CryptoNetwork | undefined => {
  return CRYPTO_NETWORKS.find((network) => network.code === code)
}

export const getCurrenciesByNetwork = (networkCode: string): Currency[] => {
  return CURRENCIES.filter(
    (currency) =>
      currency.networks &&
      (currency.networks as string[]).includes(networkCode),
  )
}

export const getNetworksForCurrency = (
  currencyCode: string,
): CryptoNetwork[] => {
  const currency = getCurrencyByCode(currencyCode)
  if (!currency?.networks) return []

  return CRYPTO_NETWORKS.filter(
    (network) =>
      currency.networks &&
      (currency.networks as string[]).includes(network.code),
  )
}

export const isMultiChainCurrency = (currencyCode: string): boolean => {
  const currency = getCurrencyByCode(currencyCode)
  return (currency?.networks?.length || 0) > 1
}

// Currency formatting helpers
export const formatCurrency = (
  amount: number,
  currencyCode: string,
  options?: FormatCurrencyOptions,
): string => {
  const currency = getCurrencyByCode(currencyCode)
  if (!currency) return amount.toString()

  const { showSymbol = true, locale = 'en-US' } = options || {}

  // Format with appropriate decimal places
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals,
  }).format(amount)

  if (!showSymbol) return formatted

  // Add currency symbol based on position
  return currency.symbolBefore
    ? `${currency.symbol}${formatted}`
    : `${formatted} ${currency.symbol}`
}

export const getCurrencyDecimals = (currencyCode: string): number => {
  const currency = getCurrencyByCode(currencyCode)
  return currency?.decimals ?? 2
}

export const getCurrencySymbol = (currencyCode: string): string => {
  const currency = getCurrencyByCode(currencyCode)
  return currency?.symbol ?? currencyCode
}

export const isSymbolBefore = (currencyCode: string): boolean => {
  const currency = getCurrencyByCode(currencyCode)
  return currency?.symbolBefore ?? false
}

// Provider helper functions
export const getCurrencyProviders = (currencyCode: string): string[] => {
  const currency = getCurrencyByCode(currencyCode)
  return currency?.providers ?? []
}

export const getCurrenciesByProvider = (providerName: string): Currency[] => {
  return CURRENCIES.filter((currency) =>
    (currency.providers as string[]).includes(providerName),
  )
}

export const hasProvider = (
  currencyCode: string,
  providerName: string,
): boolean => {
  const currency = getCurrencyByCode(currencyCode)
  return (currency?.providers as string[])?.includes(providerName) ?? false
}

// Validation helpers
export const isValidCurrencyCode = (code: string): boolean => {
  return CURRENCIES.some((currency) => currency.code === code)
}

export const isValidNetworkCode = (code: string): boolean => {
  return CRYPTO_NETWORKS.some((network) => network.code === code)
}

export const validateCurrencyNetworkPair = (
  currencyCode: string,
  networkCode: string,
): boolean => {
  const currency = getCurrencyByCode(currencyCode)
  return currency?.networks?.includes(networkCode) ?? false
}

// Search and filter helpers
export const searchCurrencies = (query: string): Currency[] => {
  const lowercaseQuery = query.toLowerCase()
  return CURRENCIES.filter(
    (currency) =>
      currency.code.toLowerCase().includes(lowercaseQuery) ||
      currency.name.toLowerCase().includes(lowercaseQuery) ||
      currency.symbol.toLowerCase().includes(lowercaseQuery),
  )
}

export const searchNetworks = (query: string): CryptoNetwork[] => {
  const lowercaseQuery = query.toLowerCase()
  return CRYPTO_NETWORKS.filter(
    (network) =>
      network.code.toLowerCase().includes(lowercaseQuery) ||
      network.name.toLowerCase().includes(lowercaseQuery) ||
      network.nativeCurrency.toLowerCase().includes(lowercaseQuery),
  )
}

// Conversion helpers
export const convertCurrencyAmount = (
  amount: number,
  fromDecimals: number,
  toDecimals: number,
): number => {
  const scaleFactor = Math.pow(10, toDecimals - fromDecimals)
  return amount * scaleFactor
}

export const normalizeAmount = (
  amount: number,
  currencyCode: string,
  targetDecimals: number = 8,
): number => {
  const currency = getCurrencyByCode(currencyCode)
  if (!currency) return amount

  return convertCurrencyAmount(amount, currency.decimals, targetDecimals)
}

/**
 * Returns the Kraken-specific pair code for a given standard pair.
 * For example, input "BTCEUR" will return "XXBTZEUR".
 */
export const findToKrakenPair = (
  pair: KrakenPairKey | string,
): KrakenPairs[KrakenPairKey] => KRAKEN_PAIR_LIST[pair as KrakenPairKey]

/**
 * Returns the standard pair code for a given Kraken-specific code.
 * For example, input "XXBTZEUR" will return "BTCEUR".
 * If the Kraken code is not found, returns undefined.
 */
export const findFromKrakenPair = (
  rawPair: KrakenPairCode | string,
): KrakenPairKey | undefined => {
  const entries = Object.entries(KRAKEN_PAIR_LIST) as [
    KrakenPairKey,
    KrakenPairCode,
  ][]

  for (const [standardPair, krakenCode] of entries) {
    if (krakenCode === rawPair) return standardPair
  }

  return undefined
}
