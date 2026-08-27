import pass2 from "@assets/resultsScreen/pass2.jpeg";
import fail2 from "@assets/resultsScreen/fail2.jpeg";
import styles from "./result_message.module.css";
import Image from "next/image";


//------------------------------------------------------------------------------------>

export default function ResultMessage({
  score,
  shuffled,
  setShowResultScreen,
}) {
  console.log(score);
  const percentage = (score / shuffled.length) * 100;

  let hasPassed;

  if (score > 25 || percentage > 86.6) {
    hasPassed = true;
  } else {
    hasPassed = false;
  }

  function showReview() {
    setShowResultScreen(false);
  }

  return (
    <div className={styles.overlay}>

      <div className={styles.modal}>


        <Image src={hasPassed ? pass2 : fail2} width="200" alt="" className={styles.res_img} />
        <h3>
          {" "}
          {hasPassed
            ? "Congragulations!! You Passed!"
            : "Ooops!! You failed"}{" "}
        </h3>

        <div className={styles.res}>

          <div className={ `${styles.res_mini_containers} ${hasPassed ? styles.status_pass : styles.status_fail}` }>
            <p> {percentage}%</p>
            <p> {hasPassed ? "Pass" : "Fail"} </p>
          </div>

          <div className={`${styles.res_mini_containers} ${hasPassed ? styles.status_pass : styles.status_fail}`}>
            <p>Score: </p>
            <p>{`${score}/ ${shuffled.length}`}</p>
          </div>

          <div className={ `${styles.time} ${hasPassed ? styles.status_pass : styles.status_fail}` }>
            <p>Time Taken: </p>
            <p>25mins 59sec</p>
          </div>


        </div>

        <div>
          <button onClick={showReview} className={styles.review_btn}>
            Review
          </button>
        </div>


      </div>
    </div>
  );
}

