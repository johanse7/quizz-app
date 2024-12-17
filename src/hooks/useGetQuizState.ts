import { useQuizStore } from "@/store";
import { useParams } from "next/navigation";

const INITIAL_QUIZ_STATE = {
  currentQuestionIndex: 0,
  answers: [] as Array<boolean>,
  completed: false,
  answerSelected: null as number | null,
  submitted: false,
};
export const useGetQuizState = () => {
  const { title } = useParams<{ title: string }>();
  const quizState = useQuizStore((state) => state.quizzes);
  const state = quizState[title] ?? INITIAL_QUIZ_STATE;
  return state;
};
