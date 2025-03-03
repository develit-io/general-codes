import type { Currency } from '../types'

const currencies: Currency[] = [
  { code: 'CZK', symbol: 'Kč', symbolBefore: false, name: 'Czech Koruna' },
  { code: 'EUR', symbol: '€', symbolBefore: false, name: 'Euro' },
  { code: 'USD', symbol: '$', symbolBefore: true, name: 'United States Dollar' },
  { code: 'PLN', symbol: 'zł', symbolBefore: false, name: 'Polish Złoty' },
  { code: 'RON', symbol: 'lei', symbolBefore: false, name: 'Romanian Leu' },
  { code: 'GBP', symbol: '£', symbolBefore: true, name: 'British Pound Sterling' },
  { code: 'RUB', symbol: '₽', symbolBefore: false, name: 'Russian Ruble' },
  { code: 'HUF', symbol: 'Ft', symbolBefore: false, name: 'Hungarian Forint' },
  { code: 'CHF', symbol: 'SFr.', symbolBefore: true, name: 'Swiss Franc' },
  { code: 'DKK', symbol: 'kr', symbolBefore: false, name: 'Danish Krone' },
  { code: 'SEK', symbol: 'kr', symbolBefore: false, name: 'Swedish Krona' },
  { code: 'HRK', symbol: 'kn', symbolBefore: false, name: 'Croatian Kuna' },
  { code: 'NOK', symbol: 'kr', symbolBefore: false, name: 'Norwegian Krone' },
  { code: 'BGN', symbol: 'лв', symbolBefore: false, name: 'Bulgarian Lev' },
  { code: 'TRY', symbol: '₺', symbolBefore: false, name: 'Turkish Lira' },
  { code: 'AUD', symbol: '$', symbolBefore: true, name: 'Australian Dollar' },
  { code: 'CAD', symbol: '$', symbolBefore: true, name: 'Canadian Dollar' },
  { code: 'JPY', symbol: '¥', symbolBefore: true, name: 'Japanese Yen' },
  { code: 'CNY', symbol: '¥', symbolBefore: true, name: 'Chinese Yuan' },
  { code: 'INR', symbol: '₹', symbolBefore: true, name: 'Indian Rupee' },
  { code: 'BRL', symbol: 'R$', symbolBefore: true, name: 'Brazilian Real' },
  { code: 'MXN', symbol: '$', symbolBefore: true, name: 'Mexican Peso' },
  { code: 'ZAR', symbol: 'R', symbolBefore: true, name: 'South African Rand' },
  { code: 'SGD', symbol: '$', symbolBefore: true, name: 'Singapore Dollar' },
  { code: 'HKD', symbol: '$', symbolBefore: true, name: 'Hong Kong Dollar' },
  { code: 'KRW', symbol: '₩', symbolBefore: true, name: 'South Korean Won' },
  { code: 'MYR', symbol: 'RM', symbolBefore: true, name: 'Malaysian Ringgit' },
  { code: 'THB', symbol: '฿', symbolBefore: true, name: 'Thai Baht' },
  { code: 'IDR', symbol: 'Rp', symbolBefore: true, name: 'Indonesian Rupiah' },
  { code: 'PHP', symbol: '₱', symbolBefore: true, name: 'Philippine Peso' },
  { code: 'AED', symbol: 'د.إ', symbolBefore: false, name: 'UAE Dirham' },
  { code: 'SAR', symbol: '﷼', symbolBefore: false, name: 'Saudi Riyal' },
  { code: 'ILS', symbol: '₪', symbolBefore: true, name: 'Israeli New Shekel' },
  { code: 'EGP', symbol: '£', symbolBefore: true, name: 'Egyptian Pound' },
  { code: 'NGN', symbol: '₦', symbolBefore: true, name: 'Nigerian Naira' },
  { code: 'PKR', symbol: '₨', symbolBefore: true, name: 'Pakistani Rupee' },
  { code: 'COP', symbol: '$', symbolBefore: true, name: 'Colombian Peso' },
  { code: 'CLP', symbol: '$', symbolBefore: true, name: 'Chilean Peso' },
  { code: 'PEN', symbol: 'S/', symbolBefore: true, name: 'Peruvian Sol' },
  { code: 'VND', symbol: '₫', symbolBefore: false, name: 'Vietnamese Dong' },
  { code: 'KZT', symbol: '₸', symbolBefore: false, name: 'Kazakhstani Tenge' },
  { code: 'UAH', symbol: '₴', symbolBefore: false, name: 'Ukrainian Hryvnia' },
]

export default currencies
