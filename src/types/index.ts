export type Country = {
  code2: string
  code3: string
  currency: string
  phoneCode: string
  name: string
  native: string
  vat: number
  priority?: number
  translatedName?: string
}

export type Language = {
  code: string
  name: string
  native: string
  cs: string
}

export type Currency = {
  code: string
  symbol: string
  symbolBefore: boolean
  name: string
  providers: string[]
}

export type CurrencyProvider = {
  id: string
  url: string
}

export type KrakenPairs = Record<string, string>

export type { CurrencyCode } from '../codes/currencies'
export type { CurrencyProviderId } from '../codes/currency-providers'
export type {
  CountryCode2,
  CountryCode3,
  CountryCurrency,
  CountryPhoneCode,
  CountryVat,
} from '../codes/countries'
export type { LanguageCode } from '../codes/languages'
