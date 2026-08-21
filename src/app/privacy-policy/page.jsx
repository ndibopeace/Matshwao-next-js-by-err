// import "./privacyPolicy.css";

import styles from "../about/footer_links.module.css"


export default function PrivacyPolicy() {
  return (
    
    <div className={styles.main_container} >

      <div>
        <h1  >Privacy Policy</h1>
        <p className= {styles.last_updated} >Last updated: 4 August 2026</p>
      </div>

      <div className={`${styles.first_sub_cont} ${styles.sub_cont}`}>

        <p>
        If you require any more information or have any questions about our
        privacy policy, please feel free to contact us by email at
        abuse@sshocean.com.
      </p>
      
      <p>
        At sshocean.com, the privacy of our visitors is of extreme importance to
        us. This privacy policy document outlines the types of personal
        information received and collected by sshocean.com and how it is used.
      </p>
      </div>

      

      <div className={styles.sub_cont}>
        <h2>Information we collect</h2>
        <p>
          We do not require an account. We collect personal information only
          when you choose to contact us through our Google Form, email,
          WhatsApp, or another contact method.
        </p>
        <p>
          When you use the website, our hosting provider and technical services
          may automatically receive limited technical information, such as your
          IP address, browser type, device type, and pages requested. This helps
          deliver, secure, and maintain the website.
        </p>
      </div>
      
      <div className={styles.sub_cont}>
        <h2>Contact form</h2>
        <p>
          If you contact us through our Google Form, we may collect the
          information you provide, including your name, email address, subject,
          and message. We use this information only to respond to your enquiry
          or feedback.
        </p>
        <p>
          Our contact form is provided by Google Forms. Google may process your
          information under its own privacy policy. Please do not send sensitive
          personal information through the form.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>How we use information</h2>
        <p>We use information only to:</p>
        <ul className= {styles}>
          <li>operate, protect, and improve the website;</li>
          <li>respond to messages or support requests; and</li>
          <li>meet legal obligations where necessary.</li>
        </ul>
        <p>
          We do not sell or rent your personal information, use it for targeted
          advertising, or create user profiles.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>
          Third-party services and links
        </h2>
        <p>
          This website may use third-party services to provide features or
          resources. For example, donations or messages may be handled through
          WhatsApp or a payment provider. These services process information
          under their own privacy policies.
        </p>
        <p>
          Links to other websites are governed by those website&apos;s own
          privacy practices.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Your choices</h2>
        <p>
          You can choose not to contact us or provide personal information. You
          may ask us to access, correct, or delete personal information you have
          sent us, where applicable, by contacting us at [your email address].
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy when the website or its services change. The
          latest version will always be published on this page.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Contact</h2>
        <p>For privacy questions, contact us at [your email address].</p>
      </div>
    </div>
  );
}
