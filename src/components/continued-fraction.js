import RationalNumber from './rational-number'

const continuedFraction = (x, deg) => {
  if (deg === 0) {
    return new RationalNumber(Math.floor(x), 1)
  }
  const decPart = x % 1
  const intPart = Math.floor(x - decPart)
  if (decPart === 0.0) {
    return new RationalNumber(intPart, 1)
  }
  const rat = continuedFraction(1 / decPart, deg - 1)
  return new RationalNumber(intPart * rat.numerator + rat.denominator, rat.numerator)
}

const findNextFractionChange = (currentRatio, degree) => {
  const currentFrac = continuedFraction(currentRatio, degree)
  const currentStr = currentFrac.toString()

  let lo = currentRatio
  let step = 1e-10
  let hi = currentRatio + step

  while (hi < 1.0) {
    if (continuedFraction(hi, degree).toString() !== currentStr) break
    lo = hi
    step *= 2
    hi = Math.min(hi + step, 1.0)
  }

  if (hi >= 1.0) {
    if (continuedFraction(1.0 - 1e-15, degree).toString() === currentStr) return null
    hi = 1.0
  }

  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    if (continuedFraction(mid, degree).toString() === currentStr) lo = mid
    else hi = mid
  }

  return hi
}

export { continuedFraction, findNextFractionChange }
