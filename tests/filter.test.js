import filter from "../src/filter.js";

describe("filter", () => {
  it("filters correct predicate results", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).toEqual([
      { user: "barney", active: true },
      { user: "pebbles", active: true },
    ]);
  });

  it("does not mutate the input array", () => {
    const input = [1, 2, 3, 4];
    const copyBefore = [...input];

    const result = filter(input, (n) => n % 2 === 0);

    expect(input).toEqual(copyBefore);
    expect(result).toEqual([2, 4]);
  });

  it("returns empty array when input array is empty", () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });

  it("predicate is called exactly length times for non-null arrays", () => {
    const arr = [1, 2, 3];
    let count = 0;
    const result = filter(arr, () => {
      count += 1;
      return false;
    });
    expect(count).toBe(arr.length);
    expect(result).toEqual([]);
  });
});
