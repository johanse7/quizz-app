export type Quiz = {
  title: string;
  icon: string;
};

export type Question = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
};
