import { IconName } from "@/components/ui/Icon";

type getStylesResponse = {
  border?: string;
  background: string;
  icon: IconName;
};

export const getStyles = (
  answerSelected: number | null,
  correctAnswer: number,
  index: number
): getStylesResponse | null => {
  if (answerSelected === null) {
    return null;
  }
  if (index !== correctAnswer && index !== answerSelected) return null;

  if (index === correctAnswer && correctAnswer === answerSelected) {
    return {
      border: "border-[3px] border-success",
      background: "bg-success text-white",
      icon: "correct",
    };
  }

  if (index === correctAnswer) {
    return {
      background: "bg-success text-white dark:text-white",
      icon: "correct",
    };
  }

  if (index === answerSelected) {
    return {
      border: "border-[3px] border-destructive",
      background: "bg-destructive text-white dark:text-white",
      icon: "error",
    };
  }

  return null;
};
