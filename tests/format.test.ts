import { formatDate, toISO, timeAgo, fromNow, formatRelative } from "../src/format";

describe("format utilities", () => {
  test("formatDate", () => {
    const date = new Date("2025-01-05T14:03:07");
    expect(formatDate(date, "YYYY-MM-DD")).toBe("2025-01-05");
    expect(formatDate(date, "DD MMM YYYY")).toBe("05 Jan 2025");
  });

  test("toISO", () => {
    const iso = toISO(new Date("2025-01-05T00:00:00Z"));
    expect(iso.startsWith("2025-01-05")).toBe(true);
  });

  test("timeAgo", () => {
    const past = new Date(Date.now() - 60000);
    expect(timeAgo(past)).toBe("1m ago");
  });

  test("fromNow", () => {
    const future = new Date(Date.now() + 60000);
    expect(fromNow(future)).toBe("in 1m");
  });

  test("formatRelative", () => {
    const today = new Date();
    expect(formatRelative(today)).toBe("Today");
  });
});
