import RationalNumber from './rational-number'
import { continuedFraction } from './continued-fraction'

test('0.5 is 1/2', () => {
  const a = new RationalNumber(1, 2)
  const b = continuedFraction(0.5, 5)
  expect(b.toString()).toBe(a.toString())
})
