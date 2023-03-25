interface Props {
  title: string;
  count: number;
}

export default function HeadCountBox(props: Props) {
  const { title, count } = props;
  return (
    <div className="flex flex-col items-center md:flex-row md:gap-2">
      <span className="text-slate-400 text-sm">{title}</span>
      <span className="font-semibold">{count}</span>
    </div>
  );
}
