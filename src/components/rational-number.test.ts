import RationalNumber from './rational-number'

test('2/4 is 1/2', () => {
    const r = new RationalNumber(2,4);
    expect([r.numerator, r.denominator]).toStrictEqual([1, 2])
})

test('10/10 is 1/1', () => {
    const r = new RationalNumber(10, 10);
    expect([r.numerator, r.denominator]).toStrictEqual([1, 1])
})

