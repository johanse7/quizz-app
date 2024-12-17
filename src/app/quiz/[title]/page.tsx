import { getQuestionByQuiz } from "@/actions";
import { QuestionContainer } from "@/components/question/QuestionContainer";
import { redirect } from "next/navigation";

type QuizPage = {
  params: Promise<{
    title: string;
  }>;
};

async function QuizPage({ params }: QuizPage) {
  const { title } = await params;
  const questions = await getQuestionByQuiz(title);

  if (!questions?.length) {
    redirect("/");
  }
  return (
    <>
      <QuestionContainer questions={questions} />
    </>
  );
}

export default QuizPage;
