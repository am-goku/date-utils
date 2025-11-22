"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.timeAgo = timeAgo;
exports.isToday = isToday;
exports.isYesterday = isYesterday;
exports.daysBetween = daysBetween;
exports.addDays = addDays;
exports.startOfDay = startOfDay;
exports.endOfDay = endOfDay;
exports.getWeekday = getWeekday;
exports.toISO = toISO;
function formatDate(date, format = "YYYY-MM-DD") {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return format
        .replace("YYYY", String(year))
        .replace("MM", month)
        .replace("DD", day)
        .replace("HH", hours)
        .replace("mm", minutes)
        .replace("ss", seconds);
} //Formatting the day to given format string 
function timeAgo(date) {
    const now = new Date().getTime();
    const diff = now - date.getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60)
        return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
        return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24)
        return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}
function isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
} // checks wheather the given date is today's or not 
function isYesterday(date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return date.toDateString() === yesterday.toDateString();
} // Checks the date and return true is its yesterday 
function daysBetween(date1, date2) {
    const diff = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function startOfDay(date) {
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);
    return result;
}
function endOfDay(date) {
    const result = new Date(date);
    result.setHours(23, 59, 59, 999);
    return result;
}
function getWeekday(date) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
}
function toISO(date) {
    return date.toISOString();
} // converting given date to ISO date string
