var Fraction = require('./fraction').Fraction

const continuousFraction = (x, deg) => {
  if (deg == 0) {
    return new Fraction(Math.floor(x), 1)
  }
  const decPart = x % 1;
  const intPart = Math.floor(x - decPart);
  if (decPart == 0.0 ) {
    return new Fraction(intPart, 1)
  }
  const frac = continuousFraction(1 / decPart, deg - 1);
  return new Fraction(intPart * frac.numerator + frac.denominator, frac.numerator)
}

module.exports.continuousFraction = continuousFraction;
