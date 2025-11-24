import { parseDate, isValidDate } from "../src/parsing";

describe("parsing utilities", () => {
  test("parseDate valid", () => {
    expect(parseDate("2025-01-01")).not.toBeNull();
  });

  test("parseDate invalid", () => {
    expect(parseDate("invalid-date")).toBeNull();
  });

  test("isValidDate", () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate("abc")).toBe(false);
  });
});
