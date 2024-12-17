type ProgressTextProps = {
  current: number;
  total: number;
};

export const ProgressText = (props: ProgressTextProps) => {
  const { current, total } = props;
  return (
    <h2 className="italic text-sm text-subtitle">{`Questions ${current} of ${total}`}</h2>
  );
};
