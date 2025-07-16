import type { Bank } from '../types'

const banks = [
  {
    name: 'Komerční banka, a.s.',
    code: '0100',
  },
  {
    name: 'Československá obchodní banka, a. s.',
    code: '0300',
  },
  {
    name: 'MONETA Money Bank, a.s.',
    code: '0600',
  },
  {
    name: 'ČESKÁ NÁRODNÍ BANKA',
    code: '0710',
  },
  {
    name: 'Česká spořitelna, a.s.',
    code: '0800',
  },
  {
    name: 'Fio banka, a.s.',
    code: '2010',
  },
  {
    name: 'Citfin, spořitelní družstvo',
    code: '2060',
  },
  {
    name: 'TRINITY BANK a.s.',
    code: '2070',
  },
  {
    name: 'ČSOB Hypoteční banka, a.s.',
    code: '2100',
  },
  {
    name: 'Peněžní dům, spořitelní družstvo',
    code: '2200',
  },
  {
    name: 'Artesa, spořitelní družstvo',
    code: '2220',
  },
  {
    name: 'Banka CREDITAS a.s.',
    code: '2250',
  },
  {
    name: 'NEY spořitelní družstvo',
    code: '2260',
  },
  {
    name: 'Citibank Europe plc, organizační složka',
    code: '2600',
  },
  {
    name: 'UniCredit Bank Czech Republic and Slovakia, a.s.',
    code: '2700',
  },
  {
    name: 'Air Bank a.s.',
    code: '3030',
  },
  {
    name: 'PKO BP S.A., Czech Branch',
    code: '3060',
  },
  {
    name: 'ING Bank N.V.',
    code: '3500',
  },
  {
    name: 'Národní rozvojová banka, a.s.',
    code: '4300',
  },
  {
    name: 'Raiffeisenbank a.s.',
    code: '5500',
  },
  {
    name: 'J&T BANKA, a.s.',
    code: '5800',
  },
  {
    name: 'PPF banka a.s.',
    code: '6000',
  },
  {
    name: 'COMMERZBANK Aktiengesellschaft, pobočka Praha',
    code: '6200',
  },
  {
    name: 'mBank S.A., organizační složka',
    code: '6210',
  },
  {
    name: 'BNP Paribas S.A., pobočka Česká republika',
    code: '6300',
  },
  {
    name: 'Partners Banka, a.s.',
    code: '6363',
  },
  {
    name: 'Všeobecná úverová banka a.s., pobočka Praha',
    code: '6700',
  },
  {
    name: 'Sberbank CZ, a.s. v likvidaci',
    code: '6800',
  },
  {
    name: 'Deutsche Bank Aktiengesellschaft Filiale Prag, organizační složka',
    code: '7910',
  },
  {
    name: 'Raiffeisen stavební spořitelna a.s.',
    code: '7950',
  },
  {
    name: 'ČSOB Stavební spořitelna, a.s.',
    code: '7960',
  },
  {
    name: 'MONETA Stavební Spořitelna, a.s.',
    code: '7970',
  },
  {
    name: 'Modrá pyramida stavební spořitelna, a.s.',
    code: '7990',
  },
  {
    name: 'Volksbank Raiffeisenbank Nordoberpfalz eG pobočka Cheb',
    code: '8030',
  },
  {
    name: 'Oberbank AG pobočka Česká republika',
    code: '8040',
  },
  {
    name: 'Stavební spořitelna České spořitelny, a.s.',
    code: '8060',
  },
  {
    name: 'Česká exportní banka, a.s.',
    code: '8090',
  },
  {
    name: 'HSBC Continental Europe, Czech Republic',
    code: '8150',
  },
  {
    name: 'Sparkasse Oberlausitz-Niederschlesien',
    code: '8190',
  },
  {
    name: 'FAS finance company s.r.o.',
    code: '8198',
  },
  {
    name: 'Payment execution s.r.o.',
    code: '8220',
  },
  {
    name: 'Bank of China (CEE) Ltd. Prague Branch',
    code: '8250',
  },
  {
    name: 'Bank of Communications Co., Ltd., Prague Branch odštěpný závod',
    code: '8255',
  },
  {
    name: 'Industrial and Commercial Bank of China Limited, Prague Branch, odštěpný závod',
    code: '8265',
  },
  {
    name: 'Multitude Bank p.l.c.',
    code: '8500',
  },
] as const satisfies readonly Bank[]

export default banks

export type BankCode = (typeof banks)[number]['code']
