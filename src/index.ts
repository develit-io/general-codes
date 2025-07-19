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

// Export arrays with codes only
export const CURRENCY_CODES = CURRENCIES.map(
  (currency) => currency.code,
) satisfies readonly CODES.CurrencyCode[]
export const COUNTRY_CODES_2 = COUNTRIES.map(
  (country) => country.code2,
) satisfies readonly CODES.CountryCode2[]
export const COUNTRY_CODES_3 = COUNTRIES.map(
  (country) => country.code3,
) satisfies readonly CODES.CountryCode3[]
export const COUNTRY_CURRENCIES = COUNTRIES.map(
  (country) => country.currency,
) satisfies readonly CODES.CountryCurrency[]
export const COUNTRY_PHONE_CODES = COUNTRIES.map(
  (country) => country.phoneCode,
) satisfies readonly CODES.CountryPhoneCode[]
export const COUNTRY_VATS = COUNTRIES.map(
  (country) => country.vat,
) satisfies readonly CODES.CountryVat[]
export const BANK_CODES = BANKS.map((bank) => bank.code) satisfies readonly CODES.BankCode[]
export const LANGUAGE_CODES = LANGUAGES.map(
  (language) => language.code,
) satisfies readonly CODES.LanguageCode[]
export const CURRENCY_PROVIDER_IDS = CURRENCY_PROVIDERS.map((provider) => provider.id) satisfies readonly CODES.CurrencyProviderId[]

export { CODES }
