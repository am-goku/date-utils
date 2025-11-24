import { isToday, isYesterday, compareDates, isPast, isFuture, daysBetween } from "../src/comparisons";

describe("comparison utilities", () => {
  test("isToday", () => {
    expect(isToday(new Date())).toBe(true);
  });

  test("isYesterday", () => {
    const y = new Date();
    y.setDate(y.getDate() - 1);
    expect(isYesterday(y)).toBe(true);
  });

  test("compareDates", () => {
    const d1 = new Date("2025-01-01");
    const d2 = new Date("2025-01-01");
    expect(compareDates(d1, d2)).toBe(true);
  });

  test("isPast", () => {
    const old = new Date(Date.now() - 1000);
    expect(isPast(old)).toBe(true);
  });

  test("isFuture", () => {
    const future = new Date(Date.now() + 1000);
    expect(isFuture(future)).toBe(true);
  });

  test("daysBetween", () => {
    const a = new Date("2025-01-01");
    const b = new Date("2025-01-10");
    expect(daysBetween(a, b)).toBe(9);
  });
});
