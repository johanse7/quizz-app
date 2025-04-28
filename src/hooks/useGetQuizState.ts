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
  const { id } = useParams<{ id: string }>();
  const quizState = useQuizStore((state) => state.quizzes);
  const state = quizState[id] ?? INITIAL_QUIZ_STATE;
  return state;
};
