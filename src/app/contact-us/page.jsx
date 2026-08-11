import "./contactUs.css"

export default function ContactUs() {
  return (
    <div className="contactUs-cont">
      <h1>Contact Us</h1>

      <p className="contact-message">We’d love to hear from you.
        Have a question, found something that needs updating, or want to share
        feedback? Send us a message using the form below.
      </p>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd3Y3NxMClWjeQazUUkZ7MzxHRMhWmbd6I1KmRf2Tpzer-suA/viewform?usp=publish-editor"
        // width="80%"
        height="1250"       
        title="Contact us"
        className="iframe-contact"
      >
        Loading…
      </iframe>
    </div>
  );
}
