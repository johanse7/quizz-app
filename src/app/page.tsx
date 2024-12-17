import { QuizzesList } from "@/components/quiz/QuizzesList";
import { getQuizzes } from "../actions";

export default async function Home() {
  const quizzes = await getQuizzes();

  if (!quizzes?.length) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
      <div className="flex flex-col gap-y-4 lg:gap-y-12">
        <h1 className="text-[40px] lg:text-6xl text-balance leading-[1.2]">
          Welcome to the <br /> <strong>Frontend Quiz!</strong>
        </h1>
        <p className="text-subtitle">Pick a subject to get started.</p>
      </div>
      <QuizzesList quizzes={quizzes} />
    </div>
  );
}
