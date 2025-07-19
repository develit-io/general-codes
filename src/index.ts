export { default as BANKS } from './codes/banks'
export { default as COUNTRIES } from './codes/countries'
export { default as CURRENCIES } from './codes/currencies'
export { default as CURRENCY_PROVIDERS } from './codes/currency-providers'
export { default as LANGUAGES } from './codes/languages'

import BANKS from './codes/banks'
import COUNTRIES from './codes/countries'
import CURRENCIES from './codes/currencies'
import CURRENCY_PROVIDERS from './codes/currency-providers'
import LANGUAGES from './codes/languages'
import * as CODES from './types'

// Export arrays with codes only as readonly tuples with literal types
export const CURRENCY_CODES = [
  ...CURRENCIES.map((currency) => currency.code),
] as const

export const COUNTRY_CODES_2 = [
  ...COUNTRIES.map((country) => country.code2),
] as const

export const COUNTRY_CODES_3 = [
  ...COUNTRIES.map((country) => country.code3),
] as const

export const COUNTRY_CURRENCIES = [
  ...COUNTRIES.map((country) => country.currency),
] as const

export const COUNTRY_PHONE_CODES = [
  ...COUNTRIES.map((country) => country.phoneCode),
] as const

export const COUNTRY_VATS = [
  ...COUNTRIES.map((country) => country.vat),
] as const

export const BANK_CODES = [...BANKS.map((bank) => bank.code)] as const

export const LANGUAGE_CODES = [
  ...LANGUAGES.map((language) => language.code),
] as const

export const CURRENCY_PROVIDER_IDS = [
  ...CURRENCY_PROVIDERS.map((provider) => provider.id),
] as const

export { CODES }
