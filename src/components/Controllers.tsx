import styles from "./Controllers.module.css";

type ControllersProps = {
  isRunning: boolean;
  isFinished: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

export default function Controllers({
  isRunning,
  isFinished,
  onStart,
  onStop,
  onReset,
}: ControllersProps) {
  return (
    <div className={styles.controllers}>
      <button
        type="button"
        className={styles.button}
        onClick={onStart}
        disabled={isRunning || isFinished}
      >
        시작
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={onStop}
        disabled={!isRunning}
      >
        정지
      </button>
      <button type="button" className={styles.button} onClick={onReset}>
        초기화
      </button>
    </div>
  );
}
