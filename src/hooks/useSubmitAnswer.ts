import { useQuizStore } from "@/store";
import confetti from "canvas-confetti";
import { useParams } from "next/navigation";

export const useSubmitAnswer = (
  correctAnswerIndex: number,
  totalQuestions: number
) => {
  const { id } = useParams<{ id: string }>();

  const goNextQuestion = useQuizStore((state) => state.goNextQuestion);
  const updateShowResults = useQuizStore((state) => state.updateShowResults);
  const saveAnswer = useQuizStore((state) => state.saveAnswer);
  const quizState = useQuizStore((state) => state.quizzes);

  const { answerSelected = null, submitted = false } = quizState[id] ?? {};
  const setSubmitted = useQuizStore((state) => state.setSubmitted);
  const setAnswerSelected = useQuizStore((state) => state.setAnswerSelected);

  const handleClickSubmit = () => {
    setSubmitted(id, true);
    if (answerSelected === null) return;

    const isCorrectAnswer = answerSelected === correctAnswerIndex;

    if (isCorrectAnswer) confetti();

    saveAnswer(isCorrectAnswer, id);
  };

  const handleNextQuestions = (currentQuestionIndex: number) => () => {
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

    setSubmitted(id, false);
    setAnswerSelected(id, null);
    if (isLastQuestion) {
      updateShowResults(id);
      return;
    }

    goNextQuestion(id);
  };

  const handleChangeAnswer = (index: number) => {
    setSubmitted(id, false);
    setAnswerSelected(id, index);
  };

  return {
    handleClickSubmit,
    answerSelected,
    submitted,
    handleChangeAnswer,
    handleNextQuestions,
  };
};
