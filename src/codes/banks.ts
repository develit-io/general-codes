import type { Bank } from '../types'

const banks = [
  {
    name: 'Komerční banka, a.s.',
    code: '0100',
    country: 'Czechia',
  },
  {
    name: 'Československá obchodní banka, a. s.',
    code: '0300',
    country: 'Czechia',
  },
  {
    name: 'MONETA Money Bank, a.s.',
    code: '0600',
    country: 'Czechia',
  },
  {
    name: 'ČESKÁ NÁRODNÍ BANKA',
    code: '0710',
    country: 'Czechia',
  },
  {
    name: 'Česká spořitelna, a.s.',
    code: '0800',
    country: 'Czechia',
  },
  {
    name: 'Fio banka, a.s.',
    code: '2010',
    country: 'Czechia',
  },
  {
    name: 'Citfin, spořitelní družstvo',
    code: '2060',
    country: 'Czechia',
  },
  {
    name: 'TRINITY BANK a.s.',
    code: '2070',
    country: 'Czechia',
  },
  {
    name: 'ČSOB Hypoteční banka, a.s.',
    code: '2100',
    country: 'Czechia',
  },
  {
    name: 'Peněžní dům, spořitelní družstvo',
    code: '2200',
    country: 'Czechia',
  },
  {
    name: 'Artesa, spořitelní družstvo',
    code: '2220',
    country: 'Czechia',
  },
  {
    name: 'Banka CREDITAS a.s.',
    code: '2250',
    country: 'Czechia',
  },
  {
    name: 'NEY spořitelní družstvo',
    code: '2260',
    country: 'Czechia',
  },
  {
    name: 'Citibank Europe plc, organizační složka',
    code: '2600',
    country: 'Czechia',
  },
  {
    name: 'UniCredit Bank Czech Republic and Slovakia, a.s.',
    code: '2700',
    country: 'Czechia',
  },
  {
    name: 'Air Bank a.s.',
    code: '3030',
    country: 'Czechia',
  },
  {
    name: 'PKO BP S.A., Czech Branch',
    code: '3060',
    country: 'Czechia',
  },
  {
    name: 'ING Bank N.V.',
    code: '3500',
    country: 'Czechia',
  },
  {
    name: 'Národní rozvojová banka, a.s.',
    code: '4300',
    country: 'Czechia',
  },
  {
    name: 'Raiffeisenbank a.s.',
    code: '5500',
    country: 'Czechia',
  },
  {
    name: 'J&T BANKA, a.s.',
    code: '5800',
    country: 'Czechia',
  },
  {
    name: 'PPF banka a.s.',
    code: '6000',
    country: 'Czechia',
  },
  {
    name: 'COMMERZBANK Aktiengesellschaft, pobočka Praha',
    code: '6200',
    country: 'Czechia',
  },
  {
    name: 'mBank S.A., organizační složka',
    code: '6210',
    country: 'Czechia',
  },
  {
    name: 'BNP Paribas S.A., pobočka Česká republika',
    code: '6300',
    country: 'Czechia',
  },
  {
    name: 'Partners Banka, a.s.',
    code: '6363',
    country: 'Czechia',
  },
  {
    name: 'Všeobecná úverová banka a.s., pobočka Praha',
    code: '6700',
    country: 'Czechia',
  },
  {
    name: 'Sberbank CZ, a.s. v likvidaci',
    code: '6800',
    country: 'Czechia',
  },
  {
    name: 'Deutsche Bank Aktiengesellschaft Filiale Prag, organizační složka',
    code: '7910',
    country: 'Czechia',
  },
  {
    name: 'Raiffeisen stavební spořitelna a.s.',
    code: '7950',
    country: 'Czechia',
  },
  {
    name: 'ČSOB Stavební spořitelna, a.s.',
    code: '7960',
    country: 'Czechia',
  },
  {
    name: 'MONETA Stavební Spořitelna, a.s.',
    code: '7970',
    country: 'Czechia',
  },
  {
    name: 'Modrá pyramida stavební spořitelna, a.s.',
    code: '7990',
    country: 'Czechia',
  },
  {
    name: 'Volksbank Raiffeisenbank Nordoberpfalz eG pobočka Cheb',
    code: '8030',
    country: 'Czechia',
  },
  {
    name: 'Oberbank AG pobočka Česká republika',
    code: '8040',
    country: 'Czechia',
  },
  {
    name: 'Stavební spořitelna České spořitelny, a.s.',
    code: '8060',
    country: 'Czechia',
  },
  {
    name: 'Česká exportní banka, a.s.',
    code: '8090',
    country: 'Czechia',
  },
  {
    name: 'HSBC Continental Europe, Czech Republic',
    code: '8150',
    country: 'Czechia',
  },
  {
    name: 'Sparkasse Oberlausitz-Niederschlesien',
    code: '8190',
    country: 'Czechia',
  },
  {
    name: 'FAS finance company s.r.o.',
    code: '8198',
    country: 'Czechia',
  },
  {
    name: 'Payment execution s.r.o.',
    code: '8220',
    country: 'Czechia',
  },
  {
    name: 'Bank of China (CEE) Ltd. Prague Branch',
    code: '8250',
    country: 'Czechia',
  },
  {
    name: 'Bank of Communications Co., Ltd., Prague Branch odštěpný závod',
    code: '8255',
    country: 'Czechia',
  },
  {
    name: 'Industrial and Commercial Bank of China Limited, Prague Branch, odštěpný závod',
    code: '8265',
    country: 'Czechia',
  },
  {
    name: 'Multitude Bank p.l.c.',
    code: '8500',
    country: 'Czechia',
  },
] as const satisfies readonly Bank[]

export default banks

export type BankCode = (typeof banks)[number]['code']
