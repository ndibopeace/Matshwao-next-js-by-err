"use client";
import { usePathname } from "next/navigation";

import styles from "./styles/header.module.css";
import HamburgerMenu from "./MobileNavMenu";

import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  // console.log(pathname); 

  return (
    <>
      <header className={styles.header}>
        <nav aria-label="Primary navigation" className={styles.headerLinks}>
          <Link className={styles.logo} href="/">
            <span>logo</span>err
          </Link>

          <ul className={styles.navlinks}>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? styles.active : ""}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={(pathname === "/theory" || pathname.startsWith("/theory/")) ? styles.active : ""}
                aria-current={pathname === "/theory" ? "page" : undefined}
                href="/theory/"
              >
                Notes
              </Link>
            </li>

            <li>
              <Link
                href="/exam"
                className={pathname === "/exam" ? styles.active : ""}
                aria-current={pathname === "/exam" ? "page" : undefined}
              >
                Exam
              </Link>
            </li>

            <li>
              <Link
                href="/frequently-asked-questions"
                className={pathname === "/frequently-asked-questions" ? styles.active : ""}
                aria-current={pathname === "/frequently-asked-questions" ? "page" : undefined}
              >
                FAQs
              </Link>
            </li>


            <li>
              <Link
                href="/how-it-works"
                className={pathname === "/how-it-works" ? styles.active : ""}
                aria-current={pathname === "/how-it-works" ? "page" : undefined}
              >
                How it works
              </Link>
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
