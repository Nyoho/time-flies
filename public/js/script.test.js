const bar = require('./script')

test('bar is plus one function', () => {
  expect(bar(3)).toBe(4)
})
