# `@develit-io/general-codes`

📦 **`@develit-io/general-codes`** is a utility package that provides standardized codes for **countries**, **currencies**, **banks**, **languages**, and **exchange rate providers**. It serves as a central repository for handling common reference data in applications.

## 📥 Installation

```sh
pnpm add @develit-io/general-codes
```

## 🚀 Features

- 🌍 **Countries** – Standardized country codes and names.
- 💱 **Currencies** – Includes fiat and crypto currencies with provider mapping.
- 🏦 **Banks** – Bank codes and names.
- 🗣 **Languages** – Language codes and names.
- 🔗 **Currency Providers** – Defines supported exchange rate providers with configurable API endpoints.

## 📚 Usage

### Importing Data

```ts
import { CODES, BANKS, COUNTRIES, CURRENCIES, LANGUAGES, CURRENCY_PROVIDERS } from "@develit-io/general-codes";

console.log(COUNTRIES); // List of country codes
console.log(CURRENCIES); // List of fiat and crypto currencies
console.log(BANKS); // List of banks
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
  sanctions?: boolean;
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
  providers: CurrencyProvider[];
  decimals: number;
};
```

### 🏦 Banks (`BANKS`)

Each bank entry follows this structure:

```ts
interface Bank {
  name: string
  code: string
  country: string
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
const CURRENCY_PROVIDERS = [
  { id: "currencyLayer", url: "https://api.currencylayer.com/live?access_key={access_key}&currencies={target}&source={base}" },
  { id: "currencyCloud", url: "https://api.currencycloud.com/v2/rates/detailed?buy_currency={target}&sell_currency={base}" },
  { id: "kraken", url: "https://api.kraken.com/0/public/Ticker?pair={base}{target}" },
  { id: "binance", url: "https://api.binance.com/api/v3/ticker/price?symbol={base}{target}" },
  { id: "CNB", url: "https://api.cnb.cz/cnbapi/exrates/daily" }
];
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
