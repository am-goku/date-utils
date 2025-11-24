# @amgoku/date-utils

A lightweight, dependency-free JavaScript/TypeScript utility library for
parsing, formatting, comparing, and manipulating dates.

## 🚀 Features

-   Format dates (`formatDate`)
-   Parse date strings (`parseDate`)
-   Compare dates (`isBefore`, `isAfter`, `isSameDay`)
-   Date arithmetic (`addDays`, `subtractDays`, etc.)
-   Relative time helpers (`timeAgo`, `fromNow`)
-   Fully typed (TypeScript)
-   Zero dependencies

## 📦 Installation

``` bash
npm install @amgoku/date-utils
```

## ✨ Usage

``` ts
import { formatDate, addDays, timeAgo } from "@amgoku/date-utils";

const now = new Date();

console.log(formatDate(now, "DD MMM YYYY"));
console.log(addDays(now, 5));
console.log(timeAgo(new Date("2025-01-01")));
```

## 🧪 Running Tests

``` bash
npm run test
```

## 📁 Project Structure

    src/
     ├─ format.ts
     ├─ parsing.ts
     ├─ arithmetic.ts
     ├─ comparisons.ts
     └─ helpers.ts
    tests/

## 🛠 Build

``` bash
npm run build
```

## 🤝 Contributing

Pull requests are welcome!

## 📄 License

MIT © 2025 Gokul Krishna
