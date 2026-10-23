import { describe, expect, it } from 'vitest'
import { getCountryByCode } from '@packages/general-codes/src/utils'

describe('getCountryByCode', () => {
  it('finds a country by alpha-2 code', () => {
    expect(getCountryByCode('CZ')?.code3).toBe('CZE')
  })

  it('finds a country by alpha-3 code', () => {
    expect(getCountryByCode('CZE')?.code2).toBe('CZ')
    expect(getCountryByCode('SVK')?.code2).toBe('SK')
  })

  it('returns undefined for an unknown code', () => {
    expect(getCountryByCode('XX')).toBeUndefined()
    expect(getCountryByCode('')).toBeUndefined()
  })
})
