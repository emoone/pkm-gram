interface Props {
  title: string;
  count: number;
}

export default function HeadCountBox(props: Props) {
  const { title, count } = props;
  return (
    <div className="flex flex-row gap-2">
      <strong>{title}</strong>
      <span>{count}</span>
    </div>
  );
}
