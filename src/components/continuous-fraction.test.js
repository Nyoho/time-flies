var Fraction = require('./fraction').Fraction
var continuousFraction = require('./continuous-fraction').continuousFraction

test('0.5 is 1/2', () => {
  const a = new Fraction(1,2);
  const b = continuousFraction(0.5, 5);
  expect(b.toString()).toBe(a.toString())
})
