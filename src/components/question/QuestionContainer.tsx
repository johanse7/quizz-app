"use client";

import { useGetQuizState, useIsClient, useSubmitAnswer } from "@/hooks";
import { Question } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { Results } from "../results/results";
import { Button } from "../ui/button";
import { Icon } from "../ui/Icon";
import { OptionList } from "./OptionList";
import { Progressbar } from "./Progressbar";
import { ProgressText } from "./ProgressText";

type QuestionContainerProps = {
  questions: Array<Question>;
};

export const QuestionContainer = ({ questions }: QuestionContainerProps) => {
  const { currentQuestionIndex = 0, completed = false } = useGetQuizState();
  const { isClient } = useIsClient();

  const question = questions[currentQuestionIndex];
  const numberQuestion = currentQuestionIndex + 1;

  const {
    handleChangeAnswer,
    answerSelected,
    submitted,
    handleClickSubmit,
    handleNextQuestions,
  } = useSubmitAnswer(question.answerIndex, questions.length);

  if (!isClient) return null;

  if (completed) return <Results />;

  return (
    <div className="fade-in grid sm:grid-cols-2 sm:gap-x-40">
      <div className="flex flex-col ">
        <Button asChild variant={"ghost"} className="mb-4 -ml-1" size={"icon"}>
          <Link href="/">
            <GoArrowLeft size={30} />
          </Link>
        </Button>
        <ProgressText current={numberQuestion} total={questions.length} />
        <h1 className="mt-3 text-[20px] font-medium">{question.question}</h1>
        <Progressbar current={numberQuestion} total={questions.length} />
      </div>
      <div className="flex flex-col gap-8">
        <OptionList
          options={question.options}
          correctAnswer={question.answerIndex}
          onClickAnswer={handleChangeAnswer}
          answerSelected={answerSelected}
          submitted={submitted}
          className={clsx({
            "pointer-events-none": submitted && answerSelected,
          })}
        />

        {submitted && answerSelected !== null ? (
          <Button
            className="text-white w-full fade-in"
            size="xl"
            onClick={handleNextQuestions(currentQuestionIndex)}
          >
            {currentQuestionIndex === questions.length - 1
              ? "Finish"
              : "Next answer"}
          </Button>
        ) : (
          <Button
            className="text-white w-full"
            size="xl"
            onClick={handleClickSubmit}
          >
            Submit Answer
          </Button>
        )}
        {submitted && answerSelected === null && (
          <div className="flex gap-x-2 items-center fade-in justify-center">
            <Icon type="error" />
            <span className="text-destructive dark:text-white">
              Please select an answer
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
