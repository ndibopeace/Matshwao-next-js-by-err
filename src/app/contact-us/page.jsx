// import "./contactUs.css"
import styles from "../about/footer_links.module.css"



export default function ContactUs() {
  return (
    <div className={styles.main_container}>
      <h1  >Contact Us</h1>

      <p>We&apos;d love to hear from you.
        Have a question, found something that needs updating, or want to share
        feedback? Send us a message using the form below.
      </p>

      <div className={styles.form}>
        <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd3Y3NxMClWjeQazUUkZ7MzxHRMhWmbd6I1KmRf2Tpzer-suA/viewform?usp=publish-editor"
        width="100%"
        height="921"     
        // scrolling="no"  
        title="Contact us"
        // frameBorder="0" 
    // marginheight="0" 
    // marginwidth="0"
      >
        Loading…
      </iframe>

      </div>
      
    </div>
  );
}
