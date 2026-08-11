import Link from "next/link";
import './styles/hero.css'


export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <p className="hero-badge">Road License Theory</p>
          <h1>
            Ace your theory test at <em>first try.</em>
          </h1>
          <p>
            Structured notes and practice quizzes covering everything you need
            to know before you hit the road.
          </p>
          <div className="hero-actions">
            <Link href='/curriculum' className="btn btn-dark">Start Learning</Link>
            <Link href="/exam" className="btn take-quiz-btn">Take a Quiz</Link>
          </div>
        </div>
      </section>

            <section className="choose-us" >
        <h2>Why Choose Us?</h2>

        <div className="why-us">
          <div className="feature">
            <div className="icon-con">
              <i className="fas fa-book"></i>
            </div>
            <h3>It&apos;s free to learn</h3>
            <p>
              Unlike others out there, we don&apos;t charge you to learn. It&apos;s
              completely free.
            </p>
          </div>

          <div className="feature">
            <div className="icon-con">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3>Practice quizzes</h3>
            <p>
              {/*<!-- To help you check on your understanding of the topics. -->*/}
              You can quiz yourself in any topic of your choosing should you
              struggle with any concept.
            </p>
          </div>

          <div className="feature">
            <div className="icon-con">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Progress tracking</h3>
            <p>
              Monitor your learning progress with our progress tracking feature
            </p>
          </div>

          <div className="feature" >
            <div className="icon-con">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile-Friendly</h3>
            <p>
              Study on the go with our mobile-friendly design, ensuring you can
              prepare for your test anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      <div className="start-learning">

        <div className="free child">
          <p className="">Start learning for free now with us!</p>
        </div>

        <div className="no-trial child">
          <p>No trial. No credit card required. Just your GitHub account.</p>
          <Link href="/curriculum" className='try-free-btn'>Try free</Link >
        </div>
      </div>


    </>
  );
}
