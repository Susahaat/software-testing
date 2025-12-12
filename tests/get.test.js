import get from '../src/get.js';

describe('get', () => {
  const object = { a: [{ b: { c: 3 } }] };
  test('retrieves value at given path (string)', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('retrieves value at given path (array)', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default value for undefined resolved values', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('returns undefined for non-existing path without default value', () => {
    expect(get(object, 'x.y.z')).toBeUndefined();
  });

  test('handles null and undefined objects gracefully', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });
});
