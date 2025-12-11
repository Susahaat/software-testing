import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  test("returns true for null and undefined", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test("returns true for primitive values (boolean, number)", () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(42)).toBe(true);
  });

  test("handles arrays correctly", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test("handles strings correctly", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("abc")).toBe(false);
  });

  test("handles objects correctly", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test("handles Map and Set correctly", () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);

    const map = new Map([["a", 1]]);
    const set = new Set([1]);
    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(set)).toBe(false);
  });

  test("handles Buffer correctly", () => {
    const buf = Buffer.alloc(0);
    expect(isEmpty(buf)).toBe(true);

    const buf2 = Buffer.from([1]);
    expect(isEmpty(buf2)).toBe(false);
  });
});
