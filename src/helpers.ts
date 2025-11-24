export function getWeekday(date: Date): string {
    return date.toLocaleDateString("en-US", { weekday: "long" });
}

export function getMonthName(date: Date): string {
    return date.toLocaleString("en-US", { month: "long" });
}

export function daysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}
