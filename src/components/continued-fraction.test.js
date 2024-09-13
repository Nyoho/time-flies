import { Fraction } from './fraction';
import { continuedFraction } from './continued-fraction';

test('0.5 is 1/2', () => {
  const a = new Fraction(1, 2);
  const b = continuedFraction(0.5, 5);
  expect(b.toString()).toBe(a.toString())
})
