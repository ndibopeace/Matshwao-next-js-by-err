"use client";
import { useState } from "react";
import Instructions from "@components/exam/instructions";
import Quiz from "@components/exam/quizComp";

// export const metadata = {
//   title: "Exam",
//   robots: {
//     index: false,
//     follow: true
//   }
// }

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
