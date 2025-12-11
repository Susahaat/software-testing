import isObject from '../src/isObject';

describe('isObject', () => {
  test('returns true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  test('returns true for arrays', () => {
    expect(isObject([])).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
  });

  test('returns true for functions', () => {
    expect(isObject(function () {})).toBe(true);
    expect(isObject(() => {})).toBe(true);
  });

  test('returns true for object wrappers', () => {
    expect(isObject(new Number(0))).toBe(true);
    expect(isObject(new String(''))).toBe(true);
    expect(isObject(new Boolean(true))).toBe(true);
  });

  test('returns false for null and undefined', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });

  test('returns false for NaN and Infinity', () => {
    expect(isObject(NaN)).toBe(false);
    expect(isObject(Infinity)).toBe(false);
  });

  test('returns false for primitive types', () => {
    expect(isObject(42)).toBe(false);
    expect(isObject('hello')).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});
