import type { Schedule } from "./schedule";

export function isDue(schedule: Schedule, now: Date): boolean {
    if (!schedule.enabled) {
        return false;
    }

    const [hour, minute] = schedule.time.split(":").map(Number);

    const isSameTime = now.getHours() === hour && now.getMinutes() === minute;
    const weekday = now.getDay() as Schedule["weekdays"][number];
    const isSameWeekday = schedule.weekdays.includes(weekday);

    return isSameTime && isSameWeekday;
}