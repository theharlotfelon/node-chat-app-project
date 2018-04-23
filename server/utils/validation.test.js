const expect = require('expect');

var {isRealString} = require('./validation.js');

describe('isRealString', () => {
    it('should reject non-string values', () => {
       var val = isRealString(5);
       expect(val).toBe(false);
    });
    it('should reject string with only spaces', () => {
       var val = isRealString('   ');
       expect(val).toBe(false);
    });
    it('should allow string with non-space characters', () => {
       var val = isRealString('   George');
       expect(val).toBe(true);
    });
});