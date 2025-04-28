import { useQuizStore } from "@/store";
import { useParams } from "next/navigation";
import confetti from 'canvas-confetti'

export const useSubmitAnswer = (
  correctAnswerIndex: number,
  totalQuestions: number
) => {
  const { title } = useParams<{ title: string }>();

  const goNextQuestion = useQuizStore((state) => state.goNextQuestion);
  const updateShowResults = useQuizStore((state) => state.updateShowResults);
  const saveAnswer = useQuizStore((state) => state.saveAnswer);
  const quizState = useQuizStore((state) => state.quizzes);

  const { answerSelected = null, submitted = false } = quizState[title] ?? {};
  const setSubmitted = useQuizStore((state) => state.setSubmitted);
  const setAnswerSelected = useQuizStore((state) => state.setAnswerSelected);

  const handleClickSubmit = () => {
    setSubmitted(title, true);
    if (answerSelected === null) return;

    const isCorrectAnswer = answerSelected === correctAnswerIndex;

    if(isCorrectAnswer) confetti();

    saveAnswer(isCorrectAnswer, title);
  };

  const handleNextQuestions = (currentQuestionIndex: number) => () => {
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

    setSubmitted(title, false);
    setAnswerSelected(title, null);
    if (isLastQuestion) {
      updateShowResults(title);
      return;
    }

    goNextQuestion(title);
  };

  const handleChangeAnswer = (index: number) => {
    setSubmitted(title, false);
    setAnswerSelected(title, index);
  };

  return {
    handleClickSubmit,
    answerSelected,
    submitted,
    handleChangeAnswer,
    handleNextQuestions,
  };
};
