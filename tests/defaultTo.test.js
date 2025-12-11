import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
  it("should return default value when given NaN, undefined or null as value", () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });

  it("should return default value when given undefined as value", () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  it("should return default value when given null as value", () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  it("should return 0 when given value is 0", () => {
    expect(defaultTo(0, 10)).toBe(0);
  });

  it("should return empty string when value is empty string", () => {
    expect(defaultTo("", 10)).toBe("");
  });

  it("should return value when value is valid", () => {
    expect(defaultTo("text", 10)).toBe("text");
    expect(defaultTo(20, 10)).toBe(20);
  });
});
