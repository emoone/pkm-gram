interface Props {
  imagePath: string;
}

export function ProfileImage(props: Props) {
  const { imagePath } = props;
  return (
    <div className="w-[100px] aspect-[1/1] bg-slate-300 rounded-[50%] overflow-hidden mx-auto md:mx-0">
      <img src={imagePath} alt="avator" />
    </div>
  );
}
