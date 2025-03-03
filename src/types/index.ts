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
  providers: CurrencyProviderId[]
}

export type CurrencyProviderId = 'currencyLayer' | 'currencyCloud' | 'CNB' | 'kraken' | 'binance'

export type CurrencyProvider = {
  id: CurrencyProviderId
  url: string
}
