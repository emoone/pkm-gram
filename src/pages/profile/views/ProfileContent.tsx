import HeadCountBox from '../../../components/profile/HeadCountBox';

interface Props {
  loginId: string | undefined;
}

export default function ProfileContent(props: Props) {
  const { loginId } = props;
  return (
    <div className="flex flex-col gap-4 md:gap-2">
      <div className="flex flex-row gap-3 justify-center items-center md:justify-start">
        <h2 className="text-lg font-semibold">{loginId}</h2>
        <button
          type="button"
          className="border-[1px] border-[#e6e6e6] p-5 text-sm rounded border-solid">
          프로필 편집
        </button>
        {/* TODO: 톱니바퀴 */}
      </div>
      <div className="flex flex-col-reverse md:flex-col md:gap-3">
        <div className="grid grid-cols-3 border-t-[1px] py-5 md:border-t-0 md:gap-3">
          <HeadCountBox title="게시물" count={30} />
          <HeadCountBox title="팔로워" count={30} />
          <HeadCountBox title="팔로우" count={30} />
        </div>
        <div className="min-h-[95px] text-center md:text-left text-sm">
          <p>소개글</p>
        </div>
      </div>
    </div>
  );
}
