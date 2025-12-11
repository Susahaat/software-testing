import eq from '../src/eq';

describe('eq', () => {
  it('should return true for the same object reference', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).toBe(true);
  });

  it('should return false for different objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const obj3 = { a: 2 };
    expect(eq(obj1, obj2)).toBe(false);
    expect(eq(obj1, obj3)).toBe(false);
  });

  it('should return false for value and its object wrapper', () => {
    expect(eq('a', Object('a'))).toBe(false);
    expect(eq(5, Object(5))).toBe(false);
  });

  it('should return true for the same values', () => {
    expect(eq('a', 'a')).toBe(true);
    expect(eq(1, 1)).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(0, 0)).toBe(true);
    expect(eq('', '')).toBe(true);
  });

  it('should return false for different values', () => {
    expect(eq('a', 'b')).toBe(false);
    expect(eq(1, 2)).toBe(false);
    expect(eq(true, false)).toBe(false);
    expect(eq(0, null)).toBe(false);
    expect(eq([], false)).toBe(false);
    expect(eq({}, false)).toBe(false);
    expect(eq([], {})).toBe(false);
  });

  it('should return true for NaN comparisons', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq(NaN, 0 / 0)).toBe(true);
  });
});
