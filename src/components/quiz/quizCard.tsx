import { Quiz } from "@/types";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Icon, IconName } from "../ui/Icon";

type QuizCardProps = {
  quiz: Quiz;
};

export const QuizCard = ({ quiz }: QuizCardProps) => {
  const { title, icon } = quiz;
  return (
    <Link href={`/quiz/${title}`}>
      <Card>
        <CardContent className="p-3 flex gap-x-4 items-center">
          <Icon type={icon as IconName} />
          <span className="text-lg font-medium">{title}</span>
        </CardContent>
      </Card>
    </Link>
  );
};
