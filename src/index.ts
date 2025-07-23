export { default as BANKS } from './codes/banks'
export { default as COUNTRIES } from './codes/countries'
export { default as CRYPTO_NETWORKS } from './codes/crypto-networks'
export { default as CURRENCIES } from './codes/currencies'
export { default as CURRENCY_PROVIDERS } from './codes/currency-providers'
export { default as LANGUAGES } from './codes/languages'

import BANKS from './codes/banks'
import COUNTRIES from './codes/countries'
import CRYPTO_NETWORKS from './codes/crypto-networks'
import CURRENCIES from './codes/currencies'
import CURRENCY_PROVIDERS from './codes/currency-providers'
import LANGUAGES from './codes/languages'
import * as CODES from './types'

// Export arrays with codes only compatible with Zod enum
export const CURRENCY_CODES = [
  ...CURRENCIES.map((currency) => currency.code),
] as const as [CODES.CurrencyCode, ...CODES.CurrencyCode[]]

export const COUNTRY_CODES_2 = [
  ...COUNTRIES.map((country) => country.code2),
] as const as [CODES.CountryCode2, ...CODES.CountryCode2[]]

export const COUNTRY_CODES_3 = [
  ...COUNTRIES.map((country) => country.code3),
] as const as [CODES.CountryCode3, ...CODES.CountryCode3[]]

export const COUNTRY_CURRENCIES = [
  ...COUNTRIES.map((country) => country.currency),
] as const as [CODES.CountryCurrency, ...CODES.CountryCurrency[]]

export const COUNTRY_PHONE_CODES = [
  ...COUNTRIES.map((country) => country.phoneCode),
] as const as [CODES.CountryPhoneCode, ...CODES.CountryPhoneCode[]]

export const COUNTRY_VATS = [
  ...COUNTRIES.map((country) => country.vat),
] as const as [CODES.CountryVat, ...CODES.CountryVat[]]

export const BANK_CODES = [...BANKS.map((bank) => bank.code)] as const as [
  CODES.BankCode,
  ...CODES.BankCode[],
]

export const LANGUAGE_CODES = [
  ...LANGUAGES.map((language) => language.code),
] as const as [CODES.LanguageCode, ...CODES.LanguageCode[]]

export const CURRENCY_PROVIDER_IDS = [
  ...CURRENCY_PROVIDERS.map((provider) => provider.id),
] as const as [CODES.CurrencyProviderId, ...CODES.CurrencyProviderId[]]

export const CRYPTO_NETWORK_CODES = [
  ...CRYPTO_NETWORKS.map((network) => network.code),
] as const

// Export currency type constants
export const CURRENCY_TYPES = ['FIAT', 'CRYPTO'] as const

// Export filtered currency arrays by type
export const FIAT_CURRENCIES = CURRENCIES.filter((c) => c.type === 'FIAT')
export const CRYPTO_CURRENCIES = CURRENCIES.filter((c) => c.type === 'CRYPTO')

export const FIAT_CURRENCY_CODES = [
  ...FIAT_CURRENCIES.map((currency) => currency.code),
] as const

export const CRYPTO_CURRENCY_CODES = [
  ...CRYPTO_CURRENCIES.map((currency) => currency.code),
] as const

export { CODES }

// Export utility functions
export * as UTILS from './utils'

// Export individual utility functions for convenience
export {
  convertCurrencyAmount,
  formatCurrency,
  getCryptoCurrencies,
  getCurrenciesByNetwork,
  getCurrenciesByProvider,
  getCurrenciesByType,
  getCurrencyByCode,
  getCurrencyDecimals,
  getCurrencyProviders,
  getCurrencySymbol,
  getFiatCurrencies,
  getNetworkByCode,
  getNetworksForCurrency,
  hasProvider,
  isCryptoCurrency,
  isFiatCurrency,
  isMultiChainCurrency,
  isSymbolBefore,
  isValidCurrencyCode,
  isValidNetworkCode,
  normalizeAmount,
  searchCurrencies,
  searchNetworks,
  validateCurrencyNetworkPair,
} from './utils'

export * as KRAKEN_CRYPTO_FIAT_PAIRS from './types'
