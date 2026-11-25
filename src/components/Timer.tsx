import styles from "./Timer.module.css";

type TimerProps = {
  remainingSeconds: number;
};

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Timer({ remainingSeconds }: TimerProps) {
  return (
    <div className={styles.timer} role="timer" aria-live="off">
      {formatTime(remainingSeconds)}
    </div>
  );
}
