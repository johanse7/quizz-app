import { Link } from "@/i18n/routing";
import { Quiz } from "@/types";
import { Card, CardContent } from "../ui/card";
import { Icon, IconName } from "../ui/Icon";

type QuizCardProps = {
  quiz: Quiz;
};

export const QuizCard = async ({ quiz }: QuizCardProps) => {
  const { id, title, icon } = quiz;

  return (
    <Link href={`/quiz/${id}`}>
      <Card>
        <CardContent className="p-3 flex gap-x-4 items-center">
          <Icon type={icon as IconName} />
          <span className="text-lg font-medium">{title}</span>
        </CardContent>
      </Card>
    </Link>
  );
};
