import type { CurrencyProvider } from '../types'

const currencyProviders: CurrencyProvider[] = [
  { id: 'currencyLayer', url: 'https://api.currencylayer.com/live?access_key=YOUR_ACCESS_KEY&currencies={target}&source={base}' },
  { id: 'currencyCloud', url: 'https://api.currencycloud.com/v2/rates/detailed?buy_currency={target}&sell_currency={base}' },
  { id: 'kraken', url: 'https://api.kraken.com/0/public/Ticker?pair={base}{target}' },
  { id: 'binance', url: 'https://api.binance.com/api/v3/ticker/price?symbol={base}{target}' },
  { id: 'CNB', url: 'https://api.cnb.cz/exchange-rate?base={base}&target={target}' },
]

export default currencyProviders
