import Quiz from "@/components/exam/quizPage";


export const metadata = {
  title: "Exam",
  description: 'test yourself with our exam to check how well you understood theory concepts',
  robots: {
    index: false,
    follow: true
  }
}


export default function QuizPage() {
  return <Quiz />;
}
