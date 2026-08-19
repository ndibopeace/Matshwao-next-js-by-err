"use client";

// import { useRouter } from "next/navigation";
import styles from "./quiz.css"

import { useState } from "react";
import Image from "next/image";
import ResultMessage from "./result_message";
import Modal from "./modal";

import {
  lesson1Notes,
  // lesson2Notes,
  lesson3Notes,
  lesson4Notes,
  lesson5Notes,
  lesson6Notes,
  lesson7Notes,
  lesson8Notes,
  lesson9Notes,
  lesson10Notes,
  lesson11Notes,
  lesson12Notes,
  lesson13Notes,
  lesson14Notes,
} from "@data/data";

export default function Quiz() {
  //    ---------------------------------------------------------------------------->
  function pickRandomItems(arr, n) {
    // this function shuffles the array and slices n number of items from the array.

    if (n > arr.length) throw new Error("Can't pick more items than exist");
    const shuffled = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
  }
  //    ---------------------------------------------------------------------------->


  let [quizQuestions] = useState(examQuestionsFx());
  let [score, setScore] = useState(0);

  let [shuffled /*setShuffled*/] = useState(
    getQuizQuestions(quizQuestions, 1),
  );

  let [selectedAnswers, setSelectedAnswers] = useState(
    new Array(shuffled.length).fill(null),
  );

  let [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);
  let [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showResultScreen, setShowResultScreen] = useState(false);

  function examQuestionsFx() {
    // a function that slices through each topic to make 30 exam questions array
    return [
      ...pickRandomItems(lesson1Notes, 2),
      // ...pickRandomItems(lesson2Notes, 2),
      ...pickRandomItems(lesson3Notes, 2),
      ...pickRandomItems(lesson4Notes, 3),
      ...pickRandomItems(lesson5Notes, 2),
      ...pickRandomItems(lesson6Notes, 4),
      ...pickRandomItems(lesson7Notes, 4),
      ...pickRandomItems(lesson8Notes, 2),
      ...pickRandomItems(lesson9Notes, 2),
      ...pickRandomItems(lesson10Notes, 2),
      ...pickRandomItems(lesson11Notes, 2),
      ...pickRandomItems(lesson12Notes, 1),
      ...pickRandomItems(lesson13Notes, 2),
      ...pickRandomItems(lesson14Notes, 2),
    ];
  }

  function getQuizQuestions(arr, n) {
    // this function creates a new array from a shuffled array. also shuffles the options.

    let shuffledArr = pickRandomItems(arr, n);
    let copyArr = [...shuffledArr];

    let newArr = copyArr.map(({ question, wrongChoices, answers, image }) => {
      let slicedWrong = [...pickRandomItems(wrongChoices, 3)];
      let slicedRight = [...pickRandomItems(answers, 1)];

      let shuffledOptions = pickRandomItems(
        [...slicedRight, ...slicedWrong],
        4,
      );

      return {
        question,
        key: crypto.randomUUID(),
        options: shuffledOptions,
        correctOption: slicedRight.join(),
        image,
      };
    });
    return newArr;
  }

  function setSelectedAnswer(e) {
    if (e.target.type !== "radio") return;

    const selectedAnswer = e.target.value;
    const answerIndex = e.currentTarget.dataset.index;

    let selectedAnswersCopy = [...selectedAnswers];

    selectedAnswersCopy[answerIndex] = selectedAnswer;

    setSelectedAnswers(selectedAnswersCopy);
  }

  let unAnsweredQues = selectedAnswers.reduce((acc, answer, i) => {
    // checks for indexes of unanswerd questions when submitting

    if (answer === null) acc.push(i + 1);
    return acc;
  }, []);

  let showUnansweredWarning = hasTriedToSubmit && unAnsweredQues.length > 0;

  function submitAnswers() {
    setHasTriedToSubmit(true);

    if (unAnsweredQues.length > 0) {
      console.log("please answer all the questions");
      return;
    }

    setIsModalOpen(true);
  }

  // -------------------------------------------------------------------------------------------------------------------->
  // modal logic

  const confirmSubmit = () => {
    setIsModalOpen(false);
    setSubmitted(true);

    setShowResultScreen(true);

    getMarks();
  };

  const cancelSubmit = () => {
    setIsModalOpen(false);
  };

  // modal logic end
  // -------------------------------------------------------------------------------------------------------------------->

  function getMarks() {
    let n = 0;

    selectedAnswers.map((answer, i) => {
      // console.log(selectedAnswers);

      if (answer === shuffled[i].correctOption) {
        n = n + 1;
      }
    });

    setScore(n);
  }

  return (
    <div className="main_container">
      <h1 id="quiz-title">Road Theory Exam</h1>
      <p className="quiz-instruction">
        To pass this test, you need to correctly answer atleast 26/30 questions
        or get 87%.
      </p>

      <div className="q-container">
        {shuffled.map(({ question, options, key, image, correctOption }, i) => {
          return (
            <div className="q-card" key={key}>
              <p className="q-text">
                <span className="q-number">{i + 1}. </span>

                {question}
              </p>
              {image && (
                <div className="lesson-image-wrapper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="q-img lesson-image"
                    fill
                    sizes="(max-width: 768px) 70vw, 400px"
                    priority={false}
                  />
                </div>
              )}

              <ul
                className="options-cont"
                onClick={setSelectedAnswer}
                data-index={i}
              >
                {options.map((option, index) => {
                  function checkAnswersFx() {
                    // this function returns either true, false or null.
                    // used to determine className to add after submitting

                    if (!submitted) return;

                    if (selectedAnswers[i] === null) {
                      return null;
                    }

                    const userChoice = selectedAnswers[i];
                    const isUserChoiceCorrect = correctOption === userChoice;

                    return isUserChoiceCorrect;
                  }
                  const answerStatus = checkAnswersFx();

                  let className =
                    answerStatus === null
                      ? undefined
                      : answerStatus
                        ? "correct"
                        : "wrong";

                  // console.log(selectedAnswers[i]);
                  let g =
                    submitted &&
                    selectedAnswers[i] !== null &&
                    option === selectedAnswers[i];

                  return (
                    <li key={index}>
                      <label className={`option ${(g && className) || ""}`}>
                        <input
                          type="radio"
                          name={key}
                          value={option}
                          disabled={submitted}
                        />
                        {option}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="unanswered_warning">
        {" "}
        {showUnansweredWarning &&
          `The following questions are unanswered: ${unAnsweredQues} You must answer all questions.`}{" "}
      </p>

      {!submitted ? (
        <button className="submit exam_btn" onClick={submitAnswers}>
          Submit{" "}
        </button>
      ) : (
        <>
          <p className="score_res_p">
            {" "}
            Your score is {score} out of {shuffled.length}. You can now review
            your answers
          </p>
          <button className="attempt-exam exam_btn" onClick={ () => window.location.reload() }>Close Review</button>
        </>
      )}

      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          confirmSubmit={confirmSubmit}
          cancelSubmit={cancelSubmit}
        />
      )}

      {showResultScreen && (
        <>
          <ResultMessage
            score={score}
            setShowResultScreen={setShowResultScreen}
            shuffled={shuffled}
          />
        </>
      )}

      {/* {(
        <>
        <ResultMessage score={score} setShowResultScreen={setShowResultScreen} shuffled={shuffled} />
        </>
        
        )} */}
    </div>
  );
}




