import { Quiz } from "@/types";
import { QuizCard } from "./quizCard";

export type QuizzesListProps = {
  quizzes: Array<Quiz>;
};

export const QuizzesList = ({ quizzes }: QuizzesListProps) => {
  return (
    <section className=" grid gap-y-3">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.title} quiz={quiz} />
      ))}
    </section>
  );
};
