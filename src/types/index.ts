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
  sanctions?: boolean
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

export interface Bank {
  name: string
  code: string
  country: string
}

export type { BankCode } from '../codes/banks'
export type {
  CountryCode2,
  CountryCode3,
  CountryCurrency,
  CountryPhoneCode,
  CountryVat,
} from '../codes/countries'
export type { CurrencyCode } from '../codes/currencies'
export type { CurrencyProviderId } from '../codes/currency-providers'
export type { LanguageCode } from '../codes/languages'
