"use server";

import { readFile } from "fs/promises";
import path from "path";
import { Question, Quiz } from "./types";

export const getQuizzes = async (): Promise<Array<Quiz> | undefined> => {
  const result = await readFile(path.resolve("data.json"), {
    encoding: "utf8",
  });
  const data = result ? JSON.parse(result) : [];
  return data?.quizzes?.map(({ title, icon }: Quiz) => ({ title, icon }));
};

export const getQuestionByQuiz = async (
  quizName: string
): Promise<Array<Question> | undefined> => {
  const result = await readFile(path.resolve("data.json"), {
    encoding: "utf8",
  });
  const data = result ? JSON.parse(result) : [];
  const quiz: Quiz & { questions: Array<Question> } = data?.quizzes?.find(
    ({ title }: Quiz) => title === quizName
  );
  return quiz?.questions;
};

export const getQuizByName = async (name: string) => {
  const result = await readFile(path.resolve("data.json"), {
    encoding: "utf8",
  });
  const data = result ? JSON.parse(result) : [];
  const quiz: Quiz = data?.quizzes?.find(({ title }: Quiz) => title === name);
  return quiz;
};
