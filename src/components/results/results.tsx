import { useGetQuizState } from "@/hooks";
import { useQuizStore } from "@/store";
import { useParams } from "next/navigation";
import { QuizInfo } from "../navbar/QuizInfo";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

export const Results = () => {
  const { title } = useParams<{ title: string }>();

  const { answers } = useGetQuizState();

  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  const scored = answers.filter(Boolean);
  return (
    <div className="fade-in grid sm:grid-cols-2">
      <h1 className="mb-10 text-[40px]">
        Quiz completed <br />
        <strong>You scored...</strong>
      </h1>

      <div className="flex flex-col gap-y-3 sm:gap-y-8">
        <Card className="rounded-xl p-8 ">
          <CardHeader className="p-0  items-center">
            <QuizInfo />
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-x-4 p-0">
            <span className="text-[88px] sm:text-[144px] font-medium">
              {scored.length}
            </span>
            <span className="text-subtitle text-[18px]">
              out of {answers.length}
            </span>
          </CardContent>
        </Card>

        <Button
          className=" w-full text-white"
          size="xl"
          onClick={() => resetQuiz(title)}
        >
          Play Again
        </Button>
      </div>
    </div>
  );
};
