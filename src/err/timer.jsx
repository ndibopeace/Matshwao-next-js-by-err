"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./timer.module.css";

export default function Timer({
  setSubmitted,
  setShowResultScreen,
  getMarks,
}) {

  const getMarksRef = useRef(getMarks);
  useEffect(() => {
    getMarksRef.current = getMarks; //ensures we have the latest value of getmarks sorrounding variables. closures
  });





  const getMinutesSecondsFx = (milliseconds) => {
    //this function returns minutes and seconds from milliseconds returned by getTime()
    // convert ms to minutes then the remainder to seconds

    if (typeof milliseconds !== "number")
      throw new TypeError("Expected a number at getMinutesSeconds function");

    const mins = Math.floor(milliseconds / 1000 / 60);
    const sec = Math.floor((milliseconds % 60000) / 1000);

    const minsStr = String(mins).padStart(2, "0")
const secStr = String(sec).padStart(2, "0")

    return `${minsStr}:${secStr}`;
  };









  // --------------------------------------------------------------------------
  const [startTime] = useState(new Date());
  const [endTime] = useState(new Date(startTime.getTime() + 30 * 60 * 1000));
  const [countdown, setCountdown] = useState("30:00");
  // --------------------------------------------------------------------------

  useEffect(() => {
    const timerId = setInterval(() => {

      let newTime = new Date().getTime();

      if (newTime >= endTime.getTime()) {
        clearInterval(timerId);
        setSubmitted(true);
        setShowResultScreen(true);
        getMarksRef.current();
      }

      setCountdown(getMinutesSecondsFx(endTime.getTime() - newTime));
    }, 1000);

    return () => clearInterval(timerId);
  }, [endTime, setSubmitted, setShowResultScreen]);

  return (
    <div className={styles.con}>
      <p>{countdown}</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#1f1f1f"
      >
        <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
      </svg>
    </div>
  );
}
