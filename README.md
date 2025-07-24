# @amgoku/date-utils

A lightweight **TypeScript date utility library** with commonly used date and time functions — no external dependencies.

![npm](https://img.shields.io/npm/v/@amgoku/date-utils)
![license](https://img.shields.io/npm/l/@amgoku/date-utils)
![downloads](https://img.shields.io/npm/dm/@amgoku/date-utils)

---

## Features

- Format dates with custom patterns (`YYYY-MM-DD`, `DD/MM/YYYY`, etc.)
- Get human-readable relative times (`timeAgo(new Date()) → "2h ago"`)
- Check if a date is today or yesterday
- Add or compare dates easily
- Get start or end of a day
- Retrieve weekday names in plain English
- Convert dates to ISO strings
- Written in **TypeScript**, with full type definitions
- Zero dependencies

---

## Installation

```bash
npm install @amgoku/date-utils
```
or
```bash
yarn add @amgoku/date-utils
```

## Usage

```ts
import { formatDate, timeAgo, isToday, addDays } from "@amgoku/date-utils";

// Format a date
console.log(formatDate(new Date(), "DD/MM/YYYY")); // Output: "24/07/2025"

// Time ago
console.log(timeAgo(new Date(Date.now() - 3600 * 1000))); // Output: "1h ago"

// Check if today
console.log(isToday(new Date())); // true

// Add 7 days
const nextWeek = addDays(new Date(), 7);
console.log(formatDate(nextWeek)); // Output: "2025-07-31"
```

## API Reference

- formatDate(date: Date, format?: string): string
Formats a date using these tokens:

YYYY → 4-digit year

MM → 2-digit month

DD → 2-digit day

HH → 2-digit hours (24-hour format)

mm → 2-digit minutes

ss → 2-digit seconds

Default format: "YYYY-MM-DD"

- timeAgo(date: Date): string
Returns a relative time string, like:

"45s ago"

"5m ago"

"2h ago"

"3d ago"

- isToday(date: Date): boolean
Returns true if the given date is today.

- isYesterday(date: Date): boolean
Returns true if the given date is yesterday.

- daysBetween(date1: Date, date2: Date): number
Returns the absolute difference between two dates in days.

- addDays(date: Date, days: number): Date
Returns a new date by adding (or subtracting, if negative) the given number of days.

- startOfDay(date: Date): Date
Returns a new Date object representing the start of the given day (00:00:00).

- endOfDay(date: Date): Date
Returns a new Date object representing the end of the given day (23:59:59).

- getWeekday(date: Date): string
Returns the weekday name, e.g., "Monday".

- toISO(date: Date): string
Returns the ISO 8601 string representation of the date.


## License
MIT © 2025 Gokul Krishna

---
