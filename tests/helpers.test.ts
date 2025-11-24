import { getWeekday, getMonthName, daysInMonth } from "../src/helpers";

describe("helper utilities", () => {
  test("getWeekday", () => {
    const d = new Date("2025-01-01");
    expect(typeof getWeekday(d)).toBe("string");
  });

  test("getMonthName", () => {
    const d = new Date("2025-01-01");
    expect(getMonthName(d)).toBe("January");
  });

  test("daysInMonth", () => {
    expect(daysInMonth(2025, 1)).toBe(28); // February 2025
  });
});
