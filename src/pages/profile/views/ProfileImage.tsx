interface Props {
  imagePath: string;
}

export default function ProfileImage(props: Props) {
  const { imagePath } = props;
  return (
    <div className="w-[150px] h-[150px] aspect-[1/1] bg-slate-300 rounded-full overflow-hidden">
      <img src={imagePath} alt="avator" />
    </div>
  );
}
