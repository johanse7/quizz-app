"use client";

import { getQuizByName } from "@/actions";
import { Quiz } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Icon, type IconName } from "../ui/Icon";

export const QuizInfo = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isPending, startTransition] = useTransition();
  const params = useParams<{ title: string }>();

  useEffect(() => {
    startTransition(async () => {
      if (!params.title) {
        setQuiz(null);
        return;
      }

      const quizResult = await getQuizByName(params.title);
      setQuiz(quizResult);
    });
  }, [params.title]);

  if (isPending) return <p className="text-lg">Loading</p>;

  if (!quiz) return null;

  return (
    <div className="flex gap-x-4 items-center">
      <div className="p-1 bg-primary/20 rounded-md">
        <Icon type={quiz.icon as IconName} />
      </div>
      <span className="font-medium text-lg">{quiz.title}</span>
    </div>
  );
};