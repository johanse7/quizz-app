import { useTranslations } from "next-intl";

type ProgressTextProps = {
  current: number;
  total: number;
};

export const ProgressText = (props: ProgressTextProps) => {
  const { current, total } = props;
  const t = useTranslations("quiz");

  return (
    <h2 className="italic text-sm text-subtitle">{`${t(
      "questions"
    )} ${current} of ${total}`}</h2>
  );
};
