// Basic formatter
export function formatDate(date: Date, format: string = "YYYY-MM-DD"): string {
    const map: Record<string, string> = {
        YYYY: String(date.getFullYear()),
        MMM: date.toLocaleString("en-US", { month: "short" }),
        MM: String(date.getMonth() + 1).padStart(2, "0"),
        DD: String(date.getDate()).padStart(2, "0"),
        HH: String(date.getHours()).padStart(2, "0"),
        mm: String(date.getMinutes()).padStart(2, "0"),
        ss: String(date.getSeconds()).padStart(2, "0")
    };

    // Replace longest tokens first
    return Object.keys(map)
        .sort((a, b) => b.length - a.length)
        .reduce((acc, key) => acc.replace(key, map[key]), format);
}

// ISO string
export function toISO(date: Date): string {
    return date.toISOString();
}

// Relative formatted
export function timeAgo(date: Date): string {
    const now = Date.now();
    const diff = now - date.getTime();

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds}s ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

export function fromNow(date: Date): string {
    const diff = date.getTime() - Date.now();

    const seconds = Math.floor(diff / 1000);
    if (Math.abs(seconds) < 60) return seconds > 0 ? `in ${seconds}s` : `${Math.abs(seconds)}s ago`;

    const minutes = Math.floor(seconds / 60);
    if (Math.abs(minutes) < 60) return minutes > 0 ? `in ${minutes}m` : `${Math.abs(minutes)}m ago`;

    const hours = Math.floor(minutes / 60);
    if (Math.abs(hours) < 24) return hours > 0 ? `in ${hours}h` : `${Math.abs(hours)}h ago`;

    const days = Math.floor(hours / 24);
    return days > 0 ? `in ${days}d` : `${Math.abs(days)}d ago`;
}

export function formatRelative(date: Date): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = new Date(date);
    target.setHours(0, 0, 0, 0);

    const diff = (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 0) return "Today";
    if (diff === -1) return "Yesterday";
    if (diff === 1) return "Tomorrow";
    if (diff > 1) return `In ${diff} days`;
    return `${Math.abs(diff)} days ago`;
}
