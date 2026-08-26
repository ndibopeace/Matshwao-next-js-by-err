// import "./about.css"
import styles from "./footer_links.module.css";

export const metadata = {
  title: "About",
  description: 
  "Learn about err, a free study resource for Botswana driving theory."
}


export default function About() {
  return (
    <div className={styles.main_container}>
      <h1>About Us</h1>

      <div className={`${styles.first_sub_cont} ${styles.sub_cont}`}>
        <p>
          Learning road theory should be clear, practical, and available to
          everyone.
        </p>
        <p>
          This website provides free study resources for people preparing for
          the Botswana driving theory test. It brings together organised
          lessons, road-sign guidance, practice questions, and quizzes to help
          learners understand the topics they are expected to know before
          getting behind the wheel.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>What you can learn here</h2>
        <p>The lessons cover key road-theory topics, including:</p>
        <ul>
          <li>driver responsibilities and safe driving habits;</li>
          <li>road signs, road markings, and traffic signals;</li>
          <li>right of way and rules at junctions;</li>
          <li>speed, stopping distances, and following distance;</li>
          <li>different road users, including pedestrians and cyclists; and</li>
          <li>
            parking, towing, vehicle safety, and special traffic situations.
          </li>
        </ul>
      </div>

      <div className={styles.sub_cont}>
        <h2>Practice at your own pace</h2>
        <p>
          You can read through each topic, revisit difficult sections, and use
          the quizzes to check your understanding. The aim is not simply to
          memorise answers, but to build the knowledge and judgement needed to
          use the road safely and responsibly.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Free and accessible</h2>
        <p>
          The website is free to use and does not require an account. We believe
          that good road-safety education should be easy to access, whether you
          are preparing for your first theory test or refreshing your knowledge.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Important note</h2>
        <p>
          This website is an independent learning resource. It is not affiliated
          with the Department of Road Transport and Safety (DRTS), the
          Government of Botswana, or any driving school. Road rules and test
          requirements can change, so always confirm important information with
          an official source.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Help us improve</h2>
        <p>
          We are continually working to make the lessons and quizzes clearer and
          more useful. If you spot an error, have feedback, or would like to
          suggest an improvement, please contact us through the Contact Us page.
        </p>
      </div>
    </div>
  );
}
