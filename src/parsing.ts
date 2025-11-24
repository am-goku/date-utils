export function parseDate(input: string | number | Date): Date | null {
    if (input instanceof Date) return input;

    const parsed = new Date(input);
    return isNaN(parsed.getTime()) ? null : parsed;
}

export function isValidDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.getTime());
}
