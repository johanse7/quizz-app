import { getQuizzes } from "@/actions";
import { QuizzesList } from "@/components/quiz/QuizzesList";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");

  const quizzes = await getQuizzes();

  if (!quizzes?.length) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
      <div className="flex flex-col gap-y-4 lg:gap-y-12">
        <h1 className="text-[40px] lg:text-6xl text-balance leading-[1.2]">
          {t("greeting")} <br /> <strong>Frontend Quiz!</strong>
        </h1>
        <p className="text-subtitle">{t("pickSubject")}</p>
      </div>
      <QuizzesList quizzes={quizzes} />
    </div>
  );
}
