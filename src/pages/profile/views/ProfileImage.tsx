interface Props {
  imagePath: string;
}

export default function ProfileImage(props: Props) {
  const { imagePath } = props;
  return (
    <div className="w-[100px] h-[100px] aspect-[1/1] bg-slate-300 rounded-full overflow-hidden mx-auto md:mx-0">
      <img src={imagePath} alt="avator" />
    </div>
  );
}
