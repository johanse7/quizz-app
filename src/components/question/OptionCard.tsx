import { getStyles } from "@/lib/getStylesChoice";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Card, CardContent } from "../ui/card";
import { Icon } from "../ui/Icon";

export type OptionCardProps = {
  option: string;
  index: number;
  correctAnswer: number;
  answerSelected: number | null;
  submitted: boolean;
  onClickAnswer: (index: number) => void;
};

export const OptionCard = ({
  option,
  index,
  answerSelected,
  correctAnswer,
  onClickAnswer,
  submitted,
}: OptionCardProps) => {
  const styles = getStyles(answerSelected, correctAnswer, index);

  const isSelected = index === answerSelected;

  return (
    <Card
      className={clsx(
        cn(
          "group rounded-xl active:border-[3px] border-transparent border-[3px] active:border-primary",

          {
            ["border-[3px] border-primary"]: isSelected,
            [styles?.border ?? ""]: submitted,
          }
        )
      )}
      onClick={() => onClickAnswer(index)}
    >
      <CardContent className="flex  items-center p-3 justify-between cursor-pointer">
        <div className="flex gap-x-4 w-full items-center">
          <div
            className={clsx(
              cn(
                ` w-10 h-10 rounded-md flex items-center justify-center bg-gray-100 
                text-foreground dark:text-background text-[18px] uppercase  
                group-active:bg-primary group-active:text-white transition-all duration-300`,

                {
                  "group-hover:text-primary group-hover:bg-primary/10":
                    !styles?.background,
                  ["bg-primary text-white dark:text-white"]: isSelected,
                  [styles?.background ?? ""]: submitted,
                }
              )
            )}
          >
            <span>{String.fromCharCode(97 + index)}</span>
          </div>
          <span className="text-[18px] font-medium text-balance w-full">
            {option}
          </span>
        </div>
        {styles?.icon && submitted && <Icon type={styles.icon} />}
      </CardContent>
    </Card>
  );
};
