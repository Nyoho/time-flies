const foo = require('./util')

test('foo is twice function', () => {
  expect(foo(3)).toBe(6)
})
