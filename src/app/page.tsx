"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Timer from "@/components/Timer";
import Controllers from "@/components/Controllers";
import { DEFAULT_MINUTES, loadMinutes } from "@/lib/timer-storage";
import styles from "./page.module.css";

export default function Home() {
  const [minutes, setMinutes] = useState(DEFAULT_MINUTES);
  const [remainingSeconds, setRemainingSeconds] = useState(
    DEFAULT_MINUTES * 60,
  );
  const [isRunning, setIsRunning] = useState(false);

  // 로컬스토리지에 저장된 타이머 시간 불러오기
  useEffect(() => {
    const stored = loadMinutes();
    setMinutes(stored);
    setRemainingSeconds(stored * 60);
  }, []);

  // 타이머 진행
  useEffect(() => {
    if (!isRunning) return;

    const id = window.setInterval(() => {
      setRemainingSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => window.clearInterval(id);
  }, [isRunning]);

  // 0초 도달 시 자동 정지
  useEffect(() => {
    if (remainingSeconds === 0) setIsRunning(false);
  }, [remainingSeconds]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setRemainingSeconds(minutes * 60);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>pomodoro</h1>
      <Timer remainingSeconds={remainingSeconds} />
      <Controllers
        isRunning={isRunning}
        isFinished={remainingSeconds === 0}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
      <Link href="/setting" className={styles.settingButton}>
        설정
      </Link>
    </main>
  );
}
