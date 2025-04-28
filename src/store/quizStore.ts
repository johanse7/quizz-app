import { create } from "zustand";
import { persist } from "zustand/middleware";

type QuestionsInfo = {
  currentQuestionIndex: number;
  answers: Array<boolean>;
  completed: boolean;
  answerSelected: number | null;
  submitted: boolean;
};
type State = {
  quizzes: Record<string, QuestionsInfo>;
};

type Actions = {
  goNextQuestion: (currentQuiz: string) => void;
  saveAnswer: (isCorrectAnswer: boolean, currentQuiz: string) => void;
  updateShowResults: (currentQuiz: string) => void;
  resetQuiz: (currentQuiz: string) => void;
  setSubmitted: (currentQuiz: string, value: boolean) => void;
  setAnswerSelected: (currentQuiz: string, answerIndex: number | null) => void;
};

export const useQuizStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      quizzes: {},
      goNextQuestion: (currentQuiz: string) => {
        debugger;
        const { quizzes } = get();

        const newQuizzes = structuredClone(quizzes);
        const quizInfo = newQuizzes[currentQuiz] ?? {};
        quizInfo.currentQuestionIndex =
          (quizInfo.currentQuestionIndex ?? 0) + 1;

        newQuizzes[currentQuiz] = {
          ...quizInfo,
        };

        set({ quizzes: newQuizzes });
      },

      saveAnswer: (isCorrectAnswer: boolean, currentQuiz: string) => {
        const { quizzes } = get();

        const newQuizzes = structuredClone(quizzes);
        const quizInfo = newQuizzes[currentQuiz] ?? {};
        quizInfo.answers = [...(quizInfo?.answers ?? []), isCorrectAnswer];

        newQuizzes[currentQuiz] = {
          ...quizInfo,
        };

        set({ quizzes: newQuizzes });
      },

      updateShowResults: (currentQuiz: string) => {
        const { quizzes } = get();

        const newQuizzes = structuredClone(quizzes);
        const quizInfo = newQuizzes[currentQuiz] ?? {};
        quizInfo.completed = true;

        newQuizzes[currentQuiz] = {
          ...quizInfo,
        };

        set({ quizzes: newQuizzes });
      },

      resetQuiz: (currentQuiz: string) => {
        const { quizzes } = get();

        const newQuizzes = structuredClone(quizzes);
        delete newQuizzes[currentQuiz];

        set({ quizzes: newQuizzes });
      },
      setSubmitted: (currentQuiz: string, value: boolean) => {
        const { quizzes } = get();

        const newQuizzes = structuredClone(quizzes);
        const quizInfo = newQuizzes[currentQuiz] ?? {};
        quizInfo.submitted = value;

        newQuizzes[currentQuiz] = {
          ...quizInfo,
        };

        set({ quizzes: newQuizzes });
      },
      setAnswerSelected: (currentQuiz: string, answerIndex: number | null) => {
        const { quizzes } = get();

        const newQuizzes = structuredClone(quizzes);
        const quizInfo = newQuizzes[currentQuiz] ?? {};
        quizInfo.answerSelected = answerIndex;

        newQuizzes[currentQuiz] = {
          ...quizInfo,
        };

        set({ quizzes: newQuizzes });
      },
    }),
    { name: "quizzes-store" }
  )
);
