import { getQuestionByQuiz } from "@/actions";
import { QuestionContainer } from "@/components/question/QuestionContainer";
import { redirect } from "next/navigation";

type QuizPage = {
  params: Promise<{
    id: number;
  }>;
};

async function QuizPage({ params }: QuizPage) {
  const { id } = await params;

  if (Number.isNaN(id)) {
    redirect("/");
  }
  const questions = await getQuestionByQuiz(Number(id));

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
