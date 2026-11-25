"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TimerSettingInput from "@/components/TimerSettingInput";
import {
  MAX_MINUTES,
  MIN_MINUTES,
  isValidMinutes,
  loadMinutes,
  saveMinutes,
} from "@/lib/timer-storage";
import styles from "./page.module.css";

export default function SettingPage() {
  const router = useRouter();
  const [value, setValue] = useState("");

  // 현재 저장된 시간을 초기값으로 표시
  useEffect(() => {
    setValue(String(loadMinutes()));
  }, []);

  const isEmpty = value.trim() === "";
  const isValid = !isEmpty && isValidMinutes(Number(value));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;
    saveMinutes(Number(value));
    router.push("/");
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Setting</h3>
        <TimerSettingInput value={value} onChange={setValue} />
        {!isEmpty && !isValid && (
          <p className={styles.error}>
            {MIN_MINUTES}분 이상 {MAX_MINUTES}분 이하의 정수로 입력해 주세요.
          </p>
        )}
        <button type="submit" className={styles.button} disabled={!isValid}>
          설정 완료
        </button>
      </form>
    </main>
  );
}
