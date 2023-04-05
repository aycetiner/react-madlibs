const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("it is giving correct results", () => {
    expect(addCommas(1000)).toBe('1,000');
    expect(addCommas(1234)).toBe('1,234');
    expect(addCommas(9876543210)).toBe('9,876,543,210');
    expect(addCommas(6)).toBe('6');
    expect(addCommas(-5678)).toBe('-5,678');
    expect(addCommas(12345.678)).toBe('12,345.678');
  });

  test('returns an empty string for non-numeric input', () => {
    expect(addCommas('abc')).toBe('');
    expect(addCommas(null)).toBe('');
    expect(addCommas(undefined)).toBe('');
  });
});
