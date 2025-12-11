import toInteger from "../src/toInteger";

describe("toInteger", () => {
  it("converts floating point numbers to integers", () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(-4.7)).toBe(-4);
  });

  it("converts string representations of numbers to integers", () => {
    expect(toInteger("3.2")).toBe(3);
    expect(toInteger("-4.7")).toBe(-4);
  });

  it("handles special numeric values", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
    expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE);
  });

  it("handles nullish values", () => {
    expect(toInteger(NaN)).toBe(0);
    expect(toInteger(null)).toBe(0);
    expect(toInteger(undefined)).toBe(0);
    expect(toInteger({})).toBe(0);
    expect(toInteger([])).toBe(0);
  });

  it("does not change integer inputs", () => {
    expect(toInteger(5)).toBe(5);
    expect(toInteger(-10)).toBe(-10);
    expect(toInteger(0)).toBe(0);
  });

  it("handles not numeric values gracefully", () => {
    expect(toInteger("hello")).toBe(0);
    expect(toInteger(true)).toBe(1);
    expect(toInteger(false)).toBe(0);
  });
});
