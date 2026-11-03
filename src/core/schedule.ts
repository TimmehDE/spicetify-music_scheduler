export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, wie in JavaScript

export interface Schedule {
  id: string;
  playlistUri: string;     // z. B. "spotify:playlist:..."
  time: string;            // "HH:mm", 24-Stunden-Format
  weekdays: Weekday[];     // an welchen Tagen der Zeitplan gilt
  volume: number;          // 0 bis 1, wie bei Spicetify
  fadeInSeconds: number;   // 0 = kein Einblenden
  enabled: boolean;
}