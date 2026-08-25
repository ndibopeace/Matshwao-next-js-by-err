import Link from "next/link";
import styles from "./styles/hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section id={`${styles.hero_container}`}>
        <div className={styles.hero_text}>
          <p className={styles.heroBadge}>LETS DRIVE SAFELY</p>

          <p className={styles.hero_child_text}>
            Featured Path: Class B License
          </p>

          <h1>Don&apos;t spend 15K on a Learning bootcamp</h1>
          <p className={styles.hero_child_text}>
            Our Course Path helps motivated students/people pass at no extra
            cost to you
          </p>

          <div className={styles.start_learning_btn_con}>
            <Link
              href="/curriculum"
              className={`${styles.btn} ${styles.start_learning_btn}`}
            >
              Start Learning
            </Link>
          </div>
        </div>

        <div className={styles.hero_img_con}>
          <Image
            aria-hidden="true"
            src="/assets/images/hero.webp"
            alt=""
            priority
            fill
            className={styles.hero_img}
          />
        </div>
      </section>

      <section className={`${styles.chooseUs}`}>
        <h2>Why Choose Us?</h2>

        <div className={styles.whyUs}>
          <div className={styles.feature}>
            <div className={styles.iconCon}>
              <i aria-hidden="true" className="fas fa-book"></i>
            </div>
            <h3>It&apos;s free to learn</h3>
            <p>
              Unlike others out there, we don&apos;t charge you to learn.
              It&apos;s completely free.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.iconCon}>
              <i aria-hidden="true" className="fas fa-question-circle"></i>
            </div>
            <h3>Practice quizzes</h3>
            <p>
              {/*<!-- To help you check on your understanding of the topics. -->*/}
              You can quiz yourself in any topic of your choosing should you
              struggle with any concept.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.iconCon}>
              <i aria-hidden="true" className="fas fa-chart-line"></i>
            </div>
            <h3>Progress tracking</h3>
            <p>
              Monitor your learning progress with our progress tracking feature
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.iconCon}>
              <i aria-hidden="true" className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile-Friendly</h3>
            <p>
              Study on the go with our mobile-friendly design, ensuring you can
              prepare for your test anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.startLearning}>
        <div className={`${styles.free} ${styles.child}`}>
          <p className="">Start learning for free now with us!</p>
        </div>

        <div className={`${styles.noTrial}`}>
          <p>No trial. No credit card required. Just your time.</p>
          <Link href="/curriculum" className={styles.tryFreeBtn}>
            Try free
          </Link>
        </div>
      </div>
    </>
  );
}
