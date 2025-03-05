# `@develit-io/general-codes`

📦 **`@develit-io/general-codes`** is a utility package that provides standardized codes for **countries**, **currencies**, **languages**, and **exchange rate providers**. It serves as a central repository for handling common reference data in applications.

## 📥 Installation

```sh
pnpm add @develit-io/general-codes
```

## 🚀 Features

- 🌍 **Countries** – Standardized country codes and names.
- 💱 **Currencies** – Includes fiat and crypto currencies with provider mapping.
- 🗣 **Languages** – Language codes and names.
- 🔗 **Currency Providers** – Defines supported exchange rate providers with configurable API endpoints.

## 📚 Usage

### Importing Data

```ts
import { CODES, COUNTRIES, CURRENCIES, LANGUAGES, CURRENCY_PROVIDERS } from "@develit-io/general-codes";

console.log(COUNTRIES); // List of country codes
console.log(CURRENCIES); // List of fiat and crypto currencies
console.log(LANGUAGES); // Language codes
console.log(CURRENCY_PROVIDERS); // Exchange rate providers

// Importing types
const country: CODES.Country = {...};
const currency: CODES.Currency = {...};
```

## 🔹 Data Structure

### 🌍 Countries (`COUNTRIES`)

Each country entry follows this structure:

```ts
type Country = {
  code2: string;
  code3: string;
  currency: string;
  phoneCode: string;
  name: string;
  native: string;
  vat: number;
  priority?: number;
  translatedName?: string;
};
```

### 💱 Currencies (`CURRENCIES`)

Currencies include fiat and crypto, each having a type and supported providers.

```ts
type Currency = {
  code: string;
  symbol: string;
  symbolBefore: boolean;
  name: string;
  providers: CurrencyProvider[]
};
```

### 🗣 Languages (`LANGUAGES`)

Languages are stored as ISO codes with names.

```ts
type Language = {
  code: string;
  name: string;
  native: string;
  cs: string;
};
```

### 🔗 Currency Providers (`CURRENCY_PROVIDERS`)

Defines API providers for currency exchange rates, with endpoint templates.

```ts
type CurrencyProviderId = 'currencyLayer' | 'currencyCloud' | 'CNB' | 'kraken' | 'binance';

type CurrencyProvider = {
  id: CurrencyProviderId;
  url: string;
};
```

Example provider definitions:

```ts
const CURRENCY_PROVIDERS: Record<CurrencyProviderId, CurrencyProvider> = {
  currencyLayer: { id: "currencyLayer", url: "https://api.currencylayer.com/live?access_key=YOUR_ACCESS_KEY&currencies={target}&source={base}" },
  currencyCloud: { id: "currencyCloud", url: "https://api.currencycloud.com/v2/rates/detailed?buy_currency={target}&sell_currency={base}" },
  kraken: { id: "kraken", url: "https://api.kraken.com/0/public/Ticker?pair={base}{target}" },
  binance: { id: "binance", url: "https://api.binance.com/api/v3/ticker/price?symbol={base}{target}" },
  CNB: { id: "CNB", url: "https://api.cnb.cz/exchange-rate?base={base}&target={target}" }
};
```

## 🛠 Development

To contribute or modify, install dependencies and build:

```sh
pnpm install
pnpm build
```

Run tests:

```sh
pnpm test
```

## 📄 License

[Open Source © Develit.io](./LICENSE.md) - Made with 💚