import { cn } from "@/lib/utils";
import { OptionCard } from "./OptionCard";

export type OptionListProps = {
  options: Array<string>;
  correctAnswer: number;
  onClickAnswer: (index: number) => void;
  answerSelected: number | null;
  submitted: boolean;
  className?: string;
};

export const OptionList = ({
  options,
  correctAnswer,
  answerSelected,
  onClickAnswer,
  submitted,
  className,
}: OptionListProps) => {
  return (
    <ol className={cn("grid gap-6 mt-10", className)}>
      {options.map((option, index) => {
        return (
          <li key={option}>
            <OptionCard
              option={option}
              index={index}
              correctAnswer={correctAnswer}
              answerSelected={answerSelected}
              onClickAnswer={onClickAnswer}
              submitted={submitted}
            />
          </li>
        );
      })}
    </ol>
  );
};
