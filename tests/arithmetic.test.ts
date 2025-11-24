import { addDays, addMonths, startOfDay, endOfDay, startOfWeek, endOfWeek } from "../src/arithmetic";

describe("arithmetic utilities", () => {
  test("addDays", () => {
    const date = new Date("2025-01-01");
    expect(addDays(date, 5).getDate()).toBe(6);
  });

  test("addMonths", () => {
    const date = new Date("2025-01-15");
    expect(addMonths(date, 1).getMonth()).toBe(1);
  });

  test("startOfDay", () => {
    const d = startOfDay(new Date());
    expect(d.getHours()).toBe(0);
  });

  test("endOfDay", () => {
    const d = endOfDay(new Date());
    expect(d.getHours()).toBe(23);
  });

  test("startOfWeek", () => {
    const d = startOfWeek(new Date("2025-02-05")); // Wednesday
    expect(d.getDay()).toBe(0); // Should be Sunday
  });

  test("endOfWeek", () => {
    const d = endOfWeek(new Date("2025-02-05"));
    expect(d.getDay()).toBe(6); // Saturday
  });
});
