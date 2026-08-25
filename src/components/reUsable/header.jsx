import styles from "./styles/header.module.css";
import HamburgerMenu from "./hamMenu";


import Link from "next/link";

export default function Navbar() { 
  return (
    <>
      <header className={styles.header}>
        <nav aria-label="Primary navigation" className={styles.headerLinks}>
          <Link className={styles.logo} href="/">
            <span>logo</span>err
          </Link>

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
            
          </ul>

          <div className={styles.menuIcon}>
            <HamburgerMenu />
          </div>
              
            
        </nav>
      </header>
    </>
  );
}
