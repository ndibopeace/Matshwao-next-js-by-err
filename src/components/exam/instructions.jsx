import styles from "./instructions.module.css"

export default function Instructions(props) {
  
  function startExam() {
    props.setIsExamOn(true);
  }

  return (
    <div className={styles.instructions_page}>
      <h1 className={styles.instructions_title}>Road Theory Exam</h1>
      <p className={styles.instructions_intro}>Read these instructions before you begin.</p>

      <ul className={styles.instructions}>
        <li>
          The exam contains 30 multiple-choice questions drawn from the course
          notes.
        </li>
        <li>Questions and answer choices are randomised for each attempt.</li>
        <li>Select one answer for every question before submitting.</li>
        <li>You need at least 26 correct answers out of 30 (87%) to pass.</li>
        <li>
          You will be asked to confirm before submitting. After submission,
          answers cannot be changed.
        </li>
        <li>You can review your answers and score when you finish.</li>
        <li>You may retake the exam as many times as you like.</li>
      </ul>

      <button className={styles.attempt_exam} onClick={startExam}>Begin Exam</button>
    </div>
  );
}
