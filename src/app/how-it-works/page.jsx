import styles from "@/app/about/footer_links.module.css"

export const metadata = {
  title: 'How it works',
  description: 'Learn how to best make use of our website and what to expect to make your learning fruitful'
}


export default function HowItWorks() {
  return (
    <div className={styles.main_container}>
      <h1>How It Works</h1>

      <div className={`${styles.first_sub_cont} ${styles.sub_cont}`}>
        <h2>Pick a Topic</h2>
        <p>
          Browse categories like road signs, right-of-way rules, and traffic
          laws to find what you want to study.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Study the Notes</h2>
        <p>
          This only applies to the notes section — and it&apos;s worth
          understanding how the notes work before you dive in. Each note is
          written as a question followed by a list of answers (A, B, C...). At
          first glance it looks like an exam question and options to choose from, but it isn&apos;t one.
          Every answer listed is correct. These are all valid, true responses to
          that question. The exam will only pull one correct answer from the
          notes together with wrong options from elsewhere.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Read to understand!!!</h2>
        <p>
          {" "}
          Don&apos;t memorize — understand. Because the real exam from DTRS can
          pull from correct answers beyond what&apos;s shown in the notes,
          memorizing the ABC list won&apos;t be enough. Always read the question
          and all the options carefully during practice and on exam day.
          Understanding why an answer is correct is what will actually get you
          through.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Test yourself</h2>
        <p>
          On the exam that we will test you with, you&apos;ll get a version of
          the same question from the notes, but with only one correct answer
          mixed in among wrong ones. The notes are there to build your
          understanding of the topic, not to give you an answer bank to
          memorize. It&apos;s worth noting that the real exam from DTRS may
          differ in their approach.
        </p>
      </div>

      <div className={styles.sub_cont}>
        <h2>Get Instant Feedback</h2>
        <p>
          See your score immediately, with a review that highlights correct and incorrect answers.
        </p>
      </div>

      {/* <div className={styles.sub_cont}>
          <h2></h2>
          <p></p>
        </div> */}
    </div>
  );
}
