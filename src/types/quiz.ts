export type Quiz = {
  id: number;
  title: string;
  icon: string;
};

export type Question = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
};

export type LocalesData = { es: string; en: string };

export type QuizData = {
  id: number;
  title: LocalesData;
  icon: string;
};

export type QuestionData = {
  id: string;
  question: LocalesData;
  options: {es:Array<string>, en:Array<string>};
  answerIndex: number;
};
