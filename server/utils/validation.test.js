const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var values = '';
    expect(isRealString(values)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    var values = '            ';
    expect(isRealString(values)).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    var values = 'abc';
    expect(isRealString(values)).toBeTruthy();
  });
});
