import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
  it("should capitalize an all-uppercase string", () => {
    expect(capitalize("TEST")).toBe("Test");
  });

  it("should capitalize an all-lowercase string", () => {
    expect(capitalize("test")).toBe("Test");
  });

  it("should return empty string when input is empty", () => {
    expect(capitalize("")).toBeEmpty();
  });

  it("should handle non-string input by converting to string", () => {
    expect(capitalize(123)).toBe("123");
    expect(capitalize(null)).toBe("Null");
    expect(capitalize(undefined)).toBe("Undefined");
  });

  it("should not throw for special characters", () => {
    expect(() => capitalize("!hello")).not.toThrow();
    expect(capitalize("!hello")).toBe("!hello");
  });
});
