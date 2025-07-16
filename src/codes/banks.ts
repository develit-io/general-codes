import type { Bank } from '../types'

const banks = [
  {
    name: 'Komerční banka, a.s.',
    code: '0100',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Československá obchodní banka, a. s.',
    code: '0300',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'MONETA Money Bank, a.s.',
    code: '0600',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'ČESKÁ NÁRODNÍ BANKA',
    code: '0710',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Česká spořitelna, a.s.',
    code: '0800',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Fio banka, a.s.',
    code: '2010',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Citfin, spořitelní družstvo',
    code: '2060',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'TRINITY BANK a.s.',
    code: '2070',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'ČSOB Hypoteční banka, a.s.',
    code: '2100',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Peněžní dům, spořitelní družstvo',
    code: '2200',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Artesa, spořitelní družstvo',
    code: '2220',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Banka CREDITAS a.s.',
    code: '2250',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'NEY spořitelní družstvo',
    code: '2260',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Citibank Europe plc, organizační složka',
    code: '2600',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'UniCredit Bank Czech Republic and Slovakia, a.s.',
    code: '2700',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Air Bank a.s.',
    code: '3030',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'PKO BP S.A., Czech Branch',
    code: '3060',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'ING Bank N.V.',
    code: '3500',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Národní rozvojová banka, a.s.',
    code: '4300',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Raiffeisenbank a.s.',
    code: '5500',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'J&T BANKA, a.s.',
    code: '5800',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'PPF banka a.s.',
    code: '6000',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'COMMERZBANK Aktiengesellschaft, pobočka Praha',
    code: '6200',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'mBank S.A., organizační složka',
    code: '6210',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'BNP Paribas S.A., pobočka Česká republika',
    code: '6300',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Partners Banka, a.s.',
    code: '6363',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Všeobecná úverová banka a.s., pobočka Praha',
    code: '6700',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Sberbank CZ, a.s. v likvidaci',
    code: '6800',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Deutsche Bank Aktiengesellschaft Filiale Prag, organizační složka',
    code: '7910',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Raiffeisen stavební spořitelna a.s.',
    code: '7950',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'ČSOB Stavební spořitelna, a.s.',
    code: '7960',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'MONETA Stavební Spořitelna, a.s.',
    code: '7970',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Modrá pyramida stavební spořitelna, a.s.',
    code: '7990',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Volksbank Raiffeisenbank Nordoberpfalz eG pobočka Cheb',
    code: '8030',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Oberbank AG pobočka Česká republika',
    code: '8040',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Stavební spořitelna České spořitelny, a.s.',
    code: '8060',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Česká exportní banka, a.s.',
    code: '8090',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'HSBC Continental Europe, Czech Republic',
    code: '8150',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Sparkasse Oberlausitz-Niederschlesien',
    code: '8190',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'FAS finance company s.r.o.',
    code: '8198',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Payment execution s.r.o.',
    code: '8220',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Bank of China (CEE) Ltd. Prague Branch',
    code: '8250',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Bank of Communications Co., Ltd., Prague Branch odštěpný závod',
    code: '8255',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Industrial and Commercial Bank of China Limited, Prague Branch, odštěpný závod',
    code: '8265',
    country: ['CZ', 'CZE'],
  },
  {
    name: 'Multitude Bank p.l.c.',
    code: '8500',
    country: ['CZ', 'CZE'],
  },
] as const satisfies readonly Bank[]

export default banks

export type BankCode = (typeof banks)[number]['code']
