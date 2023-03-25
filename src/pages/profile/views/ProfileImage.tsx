interface Props {
  imagePath: string | null;
}

export default function ProfileImage(props: Props) {
  //   const { imagePath } = props;
  return (
    <div className="w-[150px] h-[150px] aspect-[1/1] bg-slate-300 rounded-full">
      <img
        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/23347787_1953748668282797_6712933609046540288_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=JvW3oYG-oi0AX_S7Nuv&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBH8lSwZ6kmiVnq0yxxX7L3j0mOQ8ozF0HgyuJ3O4YjAg&oe=64230B20&_nc_sid=8fd12b"
        alt="avator"
      />
    </div>
  );
}
