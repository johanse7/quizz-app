type ProgressbarProps = {
  current: number;
  total: number;
};

export const calculatePercentage = (value: number, total: number) => {
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
};

export const Progressbar = (props: ProgressbarProps) => {
  const { current, total } = props;
  const percentage = calculatePercentage(current, total);
  return (
    <div className="mt-10 sm:mt-72 w-full bg-card rounded-full h-4 flex items-center px-1">
      <div
        className="bg-primary h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
