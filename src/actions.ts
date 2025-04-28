"use server";

import { readFile } from "fs/promises";
import { getLocale } from "next-intl/server";
import path from "path";
import { Question, QuestionData, Quiz, QuizData } from "./types";

export const getQuizzes = async (): Promise<Array<Quiz> | undefined> => {
  const locale = await getLocale();

  const result = await readFile(path.resolve("data.json"), {
    encoding: "utf8",
  });
  const data = result ? JSON.parse(result) : [];
  return data?.quizzes?.map(({ id, title, icon }: QuizData) => ({
    id,
    title: title[locale as keyof typeof title],
    icon,
  }));
};

export const getQuestionByQuiz = async (
  id: number
): Promise<Array<Question> | undefined> => {
  console.log({ id });
  const locale = await getLocale();

  const result = await readFile(path.resolve("data.json"), {
    encoding: "utf8",
  });
  const data = result ? JSON.parse(result) : [];
  const quiz: QuizData & { questions: Array<QuestionData> } =
    data?.quizzes?.find((quiz: QuizData) => quiz.id === id);

  console.log({ quiz, data: data.quizzes });
  return quiz?.questions.map((quiz) => ({
    ...quiz,
    question: quiz.question[locale as keyof typeof quiz.question],
    options: quiz.options[locale as keyof typeof quiz.options],
  }));
};

export const getQuizById = async (id: number) => {
  const result = await readFile(path.resolve("data.json"), {
    encoding: "utf8",
  });

  const data = result ? JSON.parse(result) : [];
  const quiz: Quiz = data?.quizzes?.find((quiz: QuizData) => quiz.id === id);
  return quiz;
};
