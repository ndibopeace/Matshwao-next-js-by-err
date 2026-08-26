// import "./disclaimer.css"
import styles from "../about/footer_links.module.css"

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer for err’s Botswana driving theory learning resources.",
};

// import styles from "../about/footer_links.module.css"
// className={styles.main_container}

export default function Disclaimer() {
  return (
    <div className={styles.main_container}>

      <div className="disclaimer-header-cont">
        <h1 >Disclaimer</h1>
        <p className= {styles.last_updated} >Last updated: 4 August 2026</p>
      </div>

      <div className={`${styles.first_sub_cont} ${styles.disclaimer_text_cont}`}>
        <p>
        This website provides free educational material to help learners study
        Botswana road and driving theory. Its lessons, practice quizzes,
        explanations, and other resources are for general learning purposes
        only.
      </p>

      <p>
        This website is independent and is not affiliated with, endorsed by, or
        operated by the Department of Road Transport and Safety (DRTS), the
        Government of Botswana, or any driving school or testing centre.
      </p>
 
      <p>
        We make every reasonable effort to keep the content clear and useful.
        However, road laws, regulations, Highway Code guidance, licence
        requirements, fees, test formats, pass marks, and procedures can change.
        We cannot guarantee that all information on this website is complete,
        current, accurate, or suitable for every situation.
      </p>

      <p>
        Always confirm important information with DRTS, a qualified driving
        instructor, or the relevant official government source before acting on
        it.
      </p>

      <p>
        Using this website does not provide legal, professional driving, or
        licensing advice. It also does not guarantee that you will pass any
        theory test, practical driving test, or obtain a driving licence.
      </p>

      <p>
        You remain responsible for following applicable road laws, official
        instructions, and the directions of authorised officers and examiners.
        Never rely on this website instead of using safe judgement while driving
        or in any road-related situation.
      </p>

      <p>
        Some pages may link to third-party websites or services. We are not
        responsible for their content, availability, or privacy practices.
      </p>

      <p>
        By using this website, you accept this disclaimer. We may update it when
        the website or relevant information changes.
      </p>
      </div>

      
    </div>
  );
}
