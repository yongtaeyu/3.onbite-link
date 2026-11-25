import { MAX_MINUTES, MIN_MINUTES } from "@/lib/timer-storage";
import styles from "./TimerSettingInput.module.css";

type TimerSettingInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function TimerSettingInput({
  value,
  onChange,
}: TimerSettingInputProps) {
  return (
    <label className={styles.label}>
      타이머 시간 (분)
      <input
        className={styles.input}
        type="number"
        inputMode="numeric"
        min={MIN_MINUTES}
        max={MAX_MINUTES}
        step={1}
        value={value}
        placeholder={`${MIN_MINUTES} ~ ${MAX_MINUTES}`}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
