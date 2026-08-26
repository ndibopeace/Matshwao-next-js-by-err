// "use client"

// import { useState } from 'react';
import styles from "./styles/menuIcon.module.css";

export default function MenuIcon(prop) {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    prop.setIsMenuOpen((prev) => !prev);
    console.log("hey");
  };

  return (
    <button
      className={`${styles.button} ${prop.isMenuOpen ? "" : styles.menu_btn}`}
      onClick={toggleMenu}
      aria-expanded={prop.isMenuOpen}
      aria-label={prop.isMenuOpen ? "close main menu" : "open main menu"}
      type="button"
      aria-controls={prop.ariaControls}
    >
      <span
        className={`${styles.lines} ${prop.isMenuOpen ? styles.line1 : ""}`}
      ></span>
      <span
        className={`${styles.lines} ${prop.isMenuOpen ? styles.line2 : ""}`}
      ></span>
    </button>
  );
}
