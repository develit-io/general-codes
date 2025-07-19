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
export const CURRENCY_CODES: CODES.CurrencyCode[] = CURRENCIES.map(currency => currency.code)
export const COUNTRY_CODES_2: CODES.CountryCode2[]  = COUNTRIES.map(country => country.code2)
export const COUNTRY_CODES_3: CODES.CountryCode3[] = COUNTRIES.map(country => country.code3)
export const COUNTRY_CURRENCIES: CODES.CountryCurrency[] = COUNTRIES.map(country => country.currency)
export const COUNTRY_PHONE_CODES: CODES.CountryPhoneCode[] = COUNTRIES.map(country => country.phoneCode)
export const COUNTRY_VATS: CODES.CountryVat[] = COUNTRIES.map(country => country.vat)
export const BANK_CODES: CODES.BankCode[] = BANKS.map(bank => bank.code)
export const LANGUAGE_CODES: CODES.LanguageCode[] = LANGUAGES.map(language => language.code)
export const CURRENCY_PROVIDER_IDS: CODES.CurrencyProviderId[] = CURRENCY_PROVIDERS.map(provider => provider.id)

export { CODES }
