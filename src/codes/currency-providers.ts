import type { CurrencyProvider } from '../types'

const currencyProviders = [
  {
    id: 'currencyLayer',
    url: 'https://api.currencylayer.com/live?access_key={access_key}&currencies={target}&source={base}',
  },
  {
    id: 'currencyCloud',
    url: 'https://api.currencycloud.com/v2/rates/detailed?buy_currency={target}&sell_currency={base}',
  },
  {
    id: 'kraken',
    url: 'https://api.kraken.com/0/public/Ticker?pair={pairs}',
  },
  {
    id: 'binance',
    url: 'https://api.binance.com/api/v3/ticker/price?symbol={base}{target}',
  },
  { id: 'CNB', url: 'https://api.cnb.cz/cnbapi/exrates/daily' },
  {
    id: 'tradermade-live', url: 'https://marketdata.tradermade.com/api/v1/live?currency={pairs}&api_key={access_key}',
  },
  {
    id: 'tradermade-convert', url: 'https://marketdata.tradermade.com/api/v1/convert?from={from}&to={to}&amount={amount}&api_key={access_key}'
  }
] as const satisfies readonly CurrencyProvider[]

export default currencyProviders

export type CurrencyProviderId = (typeof currencyProviders)[number]['id']
