export function isToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString();
}

export function isYesterday(date: Date): boolean {
    const y = new Date();
    y.setDate(y.getDate() - 1);
    return date.toDateString() === y.toDateString();
}

export function compareDates(d1: Date, d2: Date): boolean {
    return d1.toDateString() === d2.toDateString();
}

export function isPast(date: Date): boolean {
    return date.getTime() < Date.now();
}

export function isFuture(date: Date): boolean {
    return date.getTime() > Date.now();
}

export function daysBetween(date1: Date, date2: Date): number {
    const diff = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
