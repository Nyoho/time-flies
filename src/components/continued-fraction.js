import RationalNumber from './rational-number'

const continuedFraction = (x, deg) => {
  if (deg == 0) {
    return new RationalNumber(Math.floor(x), 1)
  }
  const decPart = x % 1
  const intPart = Math.floor(x - decPart)
  if (decPart == 0.0) {
    return new RationalNumber(intPart, 1)
  }
  const rat = continuedFraction(1 / decPart, deg - 1)
  return new RationalNumber(intPart * rat.numerator + rat.denominator, rat.numerator)
}

export { continuedFraction }
