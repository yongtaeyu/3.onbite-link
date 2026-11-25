export const TIMER_STORAGE_KEY = "pomodoro-minutes";
export const DEFAULT_MINUTES = 25;
export const MIN_MINUTES = 1;
export const MAX_MINUTES = 60;

export function isValidMinutes(value: number): boolean {
  return (
    Number.isInteger(value) && value >= MIN_MINUTES && value <= MAX_MINUTES
  );
}

export function loadMinutes(): number {
  if (typeof window === "undefined") return DEFAULT_MINUTES;
  const stored = Number(window.localStorage.getItem(TIMER_STORAGE_KEY));
  return isValidMinutes(stored) ? stored : DEFAULT_MINUTES;
}

export function saveMinutes(minutes: number): void {
  window.localStorage.setItem(TIMER_STORAGE_KEY, String(minutes));
}
