import RationalNumber from './rational-number'

test('2/4 is 1/2', () => {
  const r = new RationalNumber(2, 4)
  expect([r.numerator, r.denominator]).toStrictEqual([1, 2])
})

test('10/10 is 1/1', () => {
  const r = new RationalNumber(10, 10)
  expect([r.numerator, r.denominator]).toStrictEqual([1, 1])
})

test('1/2 + 1/3 is 5/6', () => {
  const r = new RationalNumber(1, 2)
  const s = new RationalNumber(1, 3)
  r.add(s)
  expect([r.numerator, r.denominator]).toStrictEqual([5, 6])
})

test('1/2 + -1/3 is 5/6', () => {
  const r = new RationalNumber(1, 2)
  const s = new RationalNumber(-1, 3)
  r.add(s)
  expect([r.numerator, r.denominator]).toStrictEqual([1, 6])
})

test('(3/2) * (4/3) is 2/1', () => {
  const r = new RationalNumber(3, 2)
  const s = new RationalNumber(4, 3)
  r.multiply(s)
  expect([r.numerator, r.denominator]).toStrictEqual([2, 1])
})

test('(11/9) * (10/10) is 2/1', () => {
  const r = new RationalNumber(11, 9)
  const s = new RationalNumber(10, 10)
  r.multiply(s)
  expect([r.numerator, r.denominator]).toStrictEqual([11, 9])
})
