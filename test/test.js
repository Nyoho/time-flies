// p = function(obj) {
//   console.log(obj);
// };
// global.window = global;
// var script = require("../public/js/script");

// var assert = require("assert");
// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     })
//   })
// })


// import { myCtrl } from "../public/js/script.js";

// describe('continuedFraction', function () {
//   it('あ', function () {
//     assert.equal(continuedFraction(0.5), Fraction(1,2), '0.5 = 1/2');
//   });
// });

import { describe, it, expect } from 'vitest';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(5)).toBe(-1);
      expect([1, 2, 3].indexOf(0)).toBe(-1);
    });
  });
});
