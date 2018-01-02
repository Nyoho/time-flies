import assert from 'power-assert';
import { foo } from "../public/js/util";

describe('Foo', function () {
  it('Foo is something like a function.', function () {
    assert.equal(foo(10), 20, '2*10 = 20');
  });
});
