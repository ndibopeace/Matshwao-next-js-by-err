import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        {/* <div className="social-links">Social media icons</div> */}

        <div className="go-top-container">
          
          <a href="#back-top" className="arrow">
            <svg width="45" height="45" viewBox="0 0 32 32">
              <rect width="32" height="32" rx="6" fill="currentColor" />
              <path
                d="M16 22V10M16 10L10 16M16 10L22 16"
                stroke="#fff"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="first-container-footer">
          <div className="mission">
            <p>
              Our mission: to help people learn road theory for free. We
              accomplish <br />
              this by creating comrehensive lessons and quizes - all freely
              available <br /> to the public.
            </p>
            <br />
            <p>
              Donations to X helps us serve you better with up to date content.
              <br /> You can make a donation here(link).
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/theory">Study</Link>
                </li>
                <li>
                  <Link href="/exam">Exam</Link>
                </li>
                <li>
                  <Link href="contact-us">Contact Us </Link>
                </li>
                <li>
                  <Link href="buy-us-coffee">Buy Us Coffee</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3>Support</h3>

            <nav>
              <ul>
                <li>
                  <Link href="/frequently-asked-questions">FAQ</Link>
                </li>
                <li>
                  <Link href="/how-it-works">How It Works</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3>Contact Us</h3>

            <ul>
              <li>Tel: +267 71111111</li>
              <li>Email: example@email.com</li>
              <li>
                <a href="https://www.fb.com" target="_blank">
                  Fb
                </a>
              </li>

              <a
                href="https://wa.me/26771111111?text=Hi%20I%20have%20a%20question"
                target="_blank"
              >
                App
              </a>
            </ul>
          </div>
        </div>

        <div className="second-container-footer">
          <br />
          <br />
          <br />

          <div className="line-divider"></div>
          <br />

          <div className="copyright-links-con">
            <p className="copyright">&copy; 2026 - website powered err.</p>

            <nav className="footer-nav-links2">
              <ul className="quick-links">
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
        </div>
      </footer>
    </>
  );
}
