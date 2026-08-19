"use client"
import { useState } from "react";
// import "./quiz.css";
// import {
//   lesson1Notes,
//   lesson2Notes,
//   lesson3Notes,
//   lesson4Notes,
//   lesson5Notes,
//   lesson6Notes,
//   lesson7Notes,
//   lesson8Notes,
//   lesson9Notes,
//   lesson10Notes,
//   lesson11Notes,
//   lesson12Notes,
//   lesson13Notes,
//   lesson14Notes,
// } from "@data/data";


import Instructions from "@components/exam/instructions";
import Quiz from "@components/exam/quizComp";


export default function QuizPage() {
  let [isExamOn, setIsExamOn] = useState(false);

  return (
    <>
      {isExamOn ? (
        <Quiz />
      ) : (
        <Instructions isExamOn={isExamOn} setIsExamOn={setIsExamOn} />
      )}
    </>
  );
}
