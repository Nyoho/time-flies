import { Time } from './time'

// Helper: create a Date with setFullYear to avoid the 0-99 year offset
function makeDate(year, month, day) {
  const d = new Date(0)
  d.setFullYear(year, month, day)
  d.setHours(0, 0, 0, 0)
  return d
}

describe('Time handles years 1-99 correctly', () => {
  test.each([1, 2, 50, 99])('year %i: thisNewYear has the correct year', (year) => {
    const date = makeDate(year, 6, 1)
    const t = new Time(date)
    expect(t.thisNewYear.getFullYear()).toBe(year)
  })

  test.each([1, 2, 50, 99])('year %i: nextNewYear has the correct year', (year) => {
    const date = makeDate(year, 6, 1)
    const t = new Time(date)
    expect(t.nextNewYear.getFullYear()).toBe(year + 1)
  })

  test.each([1, 2, 50, 99])('year %i: ratio is between 0 and 1', (year) => {
    const date = makeDate(year, 6, 1)
    const t = new Time(date)
    expect(t.ratio).toBeGreaterThanOrEqual(0)
    expect(t.ratio).toBeLessThan(1)
  })
})

describe('Time handles boundary year 100 correctly', () => {
  test('year 100: thisNewYear has the correct year', () => {
    const date = makeDate(100, 3, 15)
    const t = new Time(date)
    expect(t.thisNewYear.getFullYear()).toBe(100)
  })

  test('year 100: ratio is between 0 and 1', () => {
    const date = makeDate(100, 3, 15)
    const t = new Time(date)
    expect(t.ratio).toBeGreaterThanOrEqual(0)
    expect(t.ratio).toBeLessThan(1)
  })
})

describe('Time handles modern years correctly', () => {
  test('year 2026: ratio is between 0 and 1', () => {
    const date = makeDate(2026, 1, 17)
    const t = new Time(date)
    expect(t.year).toBe(2026)
    expect(t.ratio).toBeGreaterThanOrEqual(0)
    expect(t.ratio).toBeLessThan(1)
  })
})
