import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should return the same number if input is already a number', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(-3)).toBe(-3);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(NaN)).toBeNaN();
  });

  it('should convert string numbers to actual numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('3')).toBe(3);
    expect(toNumber('   42   ')).toBe(42);
    expect(toNumber('-7')).toBe(-7);
  });

  it('should return NaN for non-numeric strings', () => {
    expect(toNumber('hello')).toBeNaN();
    expect(toNumber('123abc')).toBeNaN();
  });
});
it('should handle infinity and -infinity', () => {
  expect(toNumber('Infinity')).toBe(Infinity);
  expect(toNumber('-Infinity')).toBe(-Infinity);
});
it('should handle objects with valueOf method', () => {
  const obj = {
    valueOf: () => '42',
  };
  expect(toNumber(obj)).toBe(42);
  const objNum = {
    valueOf: () => 3.14,
  };
  expect(toNumber(objNum)).toBe(3.14);
});
it('should return NaN for symbol inputs', () => {
  expect(toNumber(Symbol('sym'))).toBeNaN();
});
it('should handle null and undefined', () => {
  expect(toNumber(null)).toBe(0);
  expect(toNumber(undefined)).toBeNaN();
});
