import { describe, expect, it } from "vitest";
import { isDue } from "../../src/core/matcher";
import type { Schedule } from "../../src/core/schedule";

const schedule: Schedule = {
  id: "test",
  playlistUri: "spotify:playlist:test",
  time: "07:00",
  weekdays: [1], // Monday
  volume: 0.5,
  fadeInSeconds: 0,
  enabled: true,
};

describe("isDue", () => {
  it("is due at the exact minute on a matching weekday", () => {
    // 2 Nov 2026 is a Monday (month index 10 = November)
    expect(isDue(schedule, new Date(2026, 10, 2, 7, 0, 0))).toBe(true);
  });

  it("is still due later within the same minute", () => {
    expect(isDue(schedule, new Date(2026, 10, 2, 7, 0, 30, 500))).toBe(true);
  });
});