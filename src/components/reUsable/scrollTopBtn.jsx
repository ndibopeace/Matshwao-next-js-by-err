"use client";

import { useEffect, useState } from "react";
import styles from "./styles/scrollTopBtn.module.css";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    // clean up code
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  let scrollToTopFx = () => {
    console.log("I went back to the top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          aria-label="scroll to top"
          onClick={scrollToTopFx}
          className={styles.scrollTopBtn}
        >
          <IoIosArrowDropupCircle className={styles.icon} />
        </button>
      )}
    </div>
  );
}
