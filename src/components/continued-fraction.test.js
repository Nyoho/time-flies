var Fraction = require('./fraction').Fraction
var continuedFraction = require('./continued-fraction').continuedFraction

test('0.5 is 1/2', () => {
  const a = new Fraction(1,2);
  const b = continuedFraction(0.5, 5);
  expect(b.toString()).toBe(a.toString())
})
