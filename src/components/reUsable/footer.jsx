"use client";
import { usePathname } from "next/navigation";

import styles from "./styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyrightLinksCon}>
          <p className={styles.copyright}>&copy; 2026 - powered err.</p>

          <nav aria-label="Footer Navigation" className={styles.footerLinksCon}>
            <ul className={styles.footerLinks}>
              <li>
                <Link
                  href="/buy-us-coffee"
                  aria-current={pathname === "/buy-us-coffee" ? "page" : undefined}
                >                  
                  Donate
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  aria-current={pathname === "/about" ? "page" : undefined}
                >                  
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  aria-current={pathname === "/contact-us" ? "page" : undefined}
                >                  
                  Contact us
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  aria-current={pathname === "/disclaimer" ? "page" : undefined}
                >                  
                  Disclaimer
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  aria-current={pathname === "/privacy-policy" ? "page" : undefined}
                >                  
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
