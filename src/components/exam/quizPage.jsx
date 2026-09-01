"use client";
import { useState } from "react";
import Instructions from "@components/exam/instructions";
import Quiz from "@components/exam/quizComp";

export default function QuizPage() {
  let [isExamOn, setIsExamOn] = useState(false);

  return (
    <>
      {isExamOn ? (
        <Quiz />
      ) : (
        <Instructions setIsExamOn={setIsExamOn} />
      )}
    </>
  );
}
