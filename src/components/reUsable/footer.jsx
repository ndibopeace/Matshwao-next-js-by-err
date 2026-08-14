import styles from "./styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>

        


          <div className={styles.copyrightLinksCon}>
            
            <p className={styles.copyright}>&copy; 2026 - powered err.</p>

            <nav className={styles.footerLinksCon}>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/buy-us-coffee"> Donate </Link>
                </li>
                <li>
                  <Link href="/about"> About </Link>
                </li>
                <li>
                  <Link href="/contact-us"> Contact us </Link>
                </li>
                <li>
                  <Link href="/disclaimer"> Disclaimer </Link>
                </li>
                <li>
                  <Link href="/privacy-policy"> Privacy Policy </Link>
                </li>
              </ul>
            </nav>
          </div>
      


      </footer>
    </>
  );
}
