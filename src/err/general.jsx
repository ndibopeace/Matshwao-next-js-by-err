// menu, srollTop, button,
"use client";
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
import styles from "@/err/general.module.css";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getUnits = () => {
      let topscroll = window.scrollY;
      let windowheight = window.innerHeight;
      let fullheight = document.documentElement.scrollHeight;

      const scrollableDistance = fullheight - windowheight;

      setIsVisible(topscroll > 300)


      if (scrollableDistance > 0) {
        setProgress(topscroll / scrollableDistance);
      }
    };

    window.addEventListener("scroll", getUnits, { passive: true });
    window.addEventListener("resize", getUnits);
    getUnits(); // Set initial value on load

    return () => {
      window.removeEventListener("scroll", getUnits);
      window.removeEventListener("resize", getUnits);
    };
  }, []);

  let scrollToTopFx = () => {
    console.log("I went back to the top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
     {isVisible && <button
       onClick={scrollToTopFx}
        type="button"
        aria-label="Scroll to top"
        className={styles.scroll_btn}
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          aria-hidden="true"
          className={styles.ring_svg}
        >
          <circle
            aria-hidden="true"
            cx="22"
            cy="22"
            r="20"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1"
            className={styles.track_circle}
          />

          {/* Progress circle */}
          <circle
            aria-hidden="true"
            className={styles.progress_circle}
            cx="22"
            cy="22"
            r="18"
            stroke="#FF5E27"
            strokeWidth="2.5"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - progress}
          />
        </svg>

        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 256 256"
          fill="black"
          aria-hidden="true"
          className={styles.arrow}
        >
          <path d="M208.49 120.49a12 12 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17" />
        </svg>
      </button>}
    </>
  );
}
