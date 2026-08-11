import "./buy-us-coffee.css";

export default function BuyUsCoffee() {
  return (
    <div className="donate-cont">
      <h1>Buy Us Coffee</h1>

      <p className="donate-intro-txt">
        This website is free to use because we believe every learner should have
        access to clear, practical road-theory resources.
      </p>
      <p className="donate-intro-txt">
        If the lessons and quizzes have helped you prepare for your theory test,
        you can support the work with a small contribution. Every contribution
        helps us keep the website free, improve existing lessons, add practice
        questions, and create new learning resources.
      </p>

      <div className="donate-sub-cont">
        <h2>Your support can help with</h2>
        <ul>
          <li>keeping the website available and up to date;</li>
          <li>improving lessons and practice quizzes;</li>
          <li>adding new road-theory topics and explanations; and</li>
          <li>making road-safety learning easier to access for everyone.</li>
        </ul>
      </div>

      <div className="donate-sub-cont whatsApp">
        <h2>How to contribute</h2>
        <p>
          To make a contribution, send us a message on WhatsApp and we will
          share the payment details with you.
        </p>
        <p>
          <strong>
            Message us on WhatsApp 
            <a
              href="https://wa.me/26771111111?text=Hello%2C%20I%20would%20like%20to%20support%20the%20website."
              target="_blank"
              rel="noreferrer"
            >
              : Click here
            </a>
          </strong>
        </p>
        <p>
          Contributions are completely optional. You can continue using all
          lessons and quizzes for free whether or not you choose to support the
          website.
        </p>
        <p>
          Thank you for helping us make road-theory learning free and
          accessible.
        </p>
      </div>
    </div>
  );
}
