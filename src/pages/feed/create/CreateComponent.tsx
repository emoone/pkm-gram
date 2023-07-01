import { FeedUserInfo } from '../../../components/feedItems';

export default function CreateComponent() {
  return (
    <div className="grid grid-cols-2 h-full max-w-[975px] mx-auto py-28">
      <div className="relative">
        <label
          htmlFor="imageUpload"
          className=" bg-[#3f99ed] p-5 text-center text-white rounded absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer">
          이미지 업로드
        </label>
        <input id="imageUpload" type="file" multiple className="hidden" />
      </div>
      <div className="flex flex-col">
        <FeedUserInfo isDatePublish={false} isToday={false} />
        <textarea
          placeholder="문구입력..."
          className="w-full border-none outline-none resize-none focus:ring-0  bg-transparent h-[300px]"
        />
        <button
          type="submit"
          className="btnLogin w-full mt-[15px] mb-[20px] bg-[#3f99ed] text-white py-5 font-semibold rounded-5">
          저장
        </button>
      </div>
    </div>
  );
}
