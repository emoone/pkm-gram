import HeadCountBox from '../../components/profile/HeadCountBox';
import ProfileImage from './views/ProfileImage';

export default function ProfileComponent() {
  return (
    <div className="max-w-[975px] mx-auto -tracking-[1px]">
      <div className="flex flex-row gap-10">
        <ProfileImage imagePath={null} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-3 items-center">
            <h2 className="text-lg font-semibold">kkwondev</h2>
            <button
              type="button"
              className="border-[1px] border-[#e6e6e6] p-2 text-sm rounded">
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
      </div>
    </div>
  );
}
