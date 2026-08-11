import styles from "./header.module.css";


import Link from "next/link";

export default function Navbar() { 
  return (
    <>
      <header className={styles.header}>
        <nav aria-label="Primary navigation" className={styles.headerLinks}>
          <a className={styles.logo} href="#">
            <span id="back-top">logo</span>err
          </a>

          <ul className={styles.navlinks}>
            <li>
              <Link className={styles.active} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/theory/">Notes</Link>
            </li>
            <li>
              <Link href="/exam">Exam</Link>
            </li>
            <li>
              <Link href="/frequently-asked-questions">FAQs</Link>
            </li>
            {/* <li>
              <a href="#">Menu</a>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
