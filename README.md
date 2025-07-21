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
- 🌐 **Crypto Networks** – Blockchain networks for cryptocurrency support.
- 🔗 **Currency Providers** – Defines supported exchange rate providers with configurable API endpoints.

## 📚 Usage

### Importing Data

```ts
import {
  CODES,
  BANKS,
  COUNTRIES,
  CURRENCIES,
  LANGUAGES,
  CRYPTO_NETWORKS,
  CURRENCY_PROVIDERS,
  FIAT_CURRENCIES,
  CRYPTO_CURRENCIES,
  CURRENCY_TYPES
} from "@develit-io/general-codes";

console.log(COUNTRIES); // List of country codes
console.log(CURRENCIES); // List of all currencies (fiat + crypto)
console.log(FIAT_CURRENCIES); // List of fiat currencies only
console.log(CRYPTO_CURRENCIES); // List of crypto currencies only
console.log(BANKS); // List of banks
console.log(LANGUAGES); // Language codes
console.log(CRYPTO_NETWORKS); // Blockchain networks
console.log(CURRENCY_PROVIDERS); // Exchange rate providers

// Importing types
const country: CODES.Country = {...};
const currency: CODES.Currency = {...};
const cryptoNetwork: CODES.CryptoNetwork = {...};
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
  networks?: string[] | null;
  type: 'FIAT' | 'CRYPTO';
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

### 🌐 Crypto Networks (`CRYPTO_NETWORKS`)

Blockchain networks for cryptocurrency support.

```ts
type CryptoNetwork = {
  code: string;
  name: string;
  nativeCurrency: string;
  chainId?: number;
  rpcUrl?: string;
  explorerUrl?: string;
};
```

Example networks:

```ts
const CRYPTO_NETWORKS = [
  {
    code: 'ETH',
    name: 'Ethereum',
    nativeCurrency: 'ETH',
    chainId: 1,
    rpcUrl: 'https://mainnet.infura.io/v3/',
    explorerUrl: 'https://etherscan.io',
  },
  {
    code: 'BSC',
    name: 'Binance Smart Chain',
    nativeCurrency: 'BNB',
    chainId: 56,
    rpcUrl: 'https://bsc-dataseed1.binance.org',
    explorerUrl: 'https://bscscan.com',
  },
  {
    code: 'POLYGON',
    name: 'Polygon',
    nativeCurrency: 'MATIC',
    chainId: 137,
    rpcUrl: 'https://polygon-rpc.com',
    explorerUrl: 'https://polygonscan.com',
  },
  // ... more networks
];
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

## 💡 Usage Examples

### Working with Cryptocurrencies and Crypto Networks

All cryptocurrency entries have `type: 'CRYPTO'` and assigned networks (never `null`), while fiat currencies have `type: 'FIAT'` and `networks: null`.

```ts
import { CURRENCIES, CRYPTO_NETWORKS } from "@develit-io/general-codes";

// Find Ethereum currency
const eth = CURRENCIES.find(c => c.code === 'ETH');
console.log(eth?.networks); // ['ETH', 'ARBITRUM', 'OPTIMISM', 'POLYGON']

// Find networks where ETH can be used
const ethNetworks = CRYPTO_NETWORKS.filter(n =>
  eth?.networks?.includes(n.code)
);

// Get network details for a specific chain
const ethereumMainnet = CRYPTO_NETWORKS.find(n => n.code === 'ETH');
console.log(ethereumMainnet?.chainId); // 1

// Find all currencies available on Polygon
const polygonCurrencies = CURRENCIES.filter(c =>
  c.networks?.includes('POLYGON')
);

// Get all crypto currencies using type field
const cryptoCurrencies = CURRENCIES.filter(c => c.type === 'CRYPTO');

// Get all fiat currencies using type field
const fiatCurrencies = CURRENCIES.filter(c => c.type === 'FIAT');

// Alternative: filter by networks (same result)
const cryptosByNetworks = CURRENCIES.filter(c => c.networks !== null);
const fiatsByNetworks = CURRENCIES.filter(c => c.networks === null);
```

## 🧰 Utility Functions

The library includes a comprehensive set of utility functions for working with currencies and networks:

```ts
import { UTILS } from "@develit-io/general-codes";

// Or import specific functions
import {
  getCurrencyByCode,
  formatCurrency,
  getNetworksForCurrency
} from "@develit-io/general-codes";
```

### Currency Helpers

```ts
// Get currency information
const btc = UTILS.getCurrencyByCode('BTC');
console.log(btc?.decimals); // 8

// Check currency types
UTILS.isFiatCurrency('USD'); // true
UTILS.isCryptoCurrency('BTC'); // true

// Get currencies by type
const fiats = UTILS.getFiatCurrencies();
const cryptos = UTILS.getCryptoCurrencies();
```

### Network Helpers

```ts
// Get network information
const ethereum = UTILS.getNetworkByCode('ETH');
console.log(ethereum?.chainId); // 1

// Find currencies on a network
const polygonTokens = UTILS.getCurrenciesByNetwork('POLYGON');
// Returns: [ETH, MATIC]

// Find networks for a currency
const ethNetworks = UTILS.getNetworksForCurrency('ETH');
// Returns: [ETH, ARBITRUM, OPTIMISM, POLYGON]

// Check if currency is multi-chain
UTILS.isMultiChainCurrency('ETH'); // true
UTILS.isMultiChainCurrency('BTC'); // false
```

### Currency Formatting

```ts
// Format currency amounts
UTILS.formatCurrency(1.23456789, 'BTC');
// "₿1.23456789"

UTILS.formatCurrency(1000, 'USD');
// "$1,000.00"

UTILS.formatCurrency(1000, 'JPY');
// "¥1,000"

// Custom formatting options
UTILS.formatCurrency(1000, 'EUR', {
  locale: 'de-DE',
  showSymbol: false
});
// "1.000,00"

// Get currency properties
UTILS.getCurrencyDecimals('BTC'); // 8
UTILS.getCurrencySymbol('USD'); // "$"
UTILS.isSymbolBefore('EUR'); // false
```

### Provider Helpers

```ts
// Get providers for a currency
UTILS.getCurrencyProviders('BTC');
// ['kraken', 'binance']

// Get currencies by provider
UTILS.getCurrenciesByProvider('kraken');
// [BTC, ETH, ADA, ...]

// Check if currency has specific provider
UTILS.hasProvider('BTC', 'binance'); // true
```

### Validation

```ts
// Validate codes
UTILS.isValidCurrencyCode('BTC'); // true
UTILS.isValidNetworkCode('ETH'); // true

// Validate currency-network pairs
UTILS.validateCurrencyNetworkPair('ETH', 'POLYGON'); // true
UTILS.validateCurrencyNetworkPair('BTC', 'ETH'); // false
```

### Search Functions

```ts
// Search currencies
UTILS.searchCurrencies('bit');
// Returns currencies containing "bit" in code, name, or symbol

// Search networks
UTILS.searchNetworks('ethereum');
// Returns networks containing "ethereum" in code, name, or nativeCurrency
```


### Amount Conversion

```ts
// Convert between different decimal precisions
UTILS.convertCurrencyAmount(100, 2, 8);
// Converts 100 (2 decimals) to 10000000 (8 decimals)

// Normalize amount to specific decimals
UTILS.normalizeAmount(1.5, 'USD', 8);
// Converts 1.5 USD (2 decimals) to 150000000 (8 decimals)
```

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
