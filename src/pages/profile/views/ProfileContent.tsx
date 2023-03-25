import HeadCountBox from '../../../components/profile/HeadCountBox';

interface Props {
  loginId: string | undefined;
}

export default function ProfileContent(props: Props) {
  const { loginId } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-3 items-center">
        <h2 className="text-lg font-semibold">{loginId}</h2>
        <button
          type="button"
          className="border-[1px] border-[#e6e6e6] p-5 text-sm rounded">
          프로필 편집
        </button>
        {/* TODO: 톱니바퀴 */}
      </div>
      <div className="flex flex-row gap-3">
        <HeadCountBox title="게시물" count={30} />
        <HeadCountBox title="팔로워" count={30} />
        <HeadCountBox title="팔로우" count={30} />
      </div>
      <div className="min-h-[95px]">
        <p>소개글</p>
      </div>
    </div>
  );
}
