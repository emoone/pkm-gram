export default function FeedComponent() {
  return (
    <div className="max-w-[600px] flex flex-col gap-10 mx-auto my-14 -tracking-[1px]">
      <div className="border-[1px] border-[#e6e6e6] p-[20px]">
        <div className="flex flex-row gap-3 items-center">
          <div className="w-[48px]">
            <img
              src="https://intro.kwkang.dev/img/my.02d7c309.jpeg"
              alt="img"
              className="block w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col text-sm">
            <span>
              <strong>kkwondev</strong> <span>• 2일</span>
            </span>
            <p>스터디카페</p>
          </div>
        </div>
        <div className="">
          <img
            src="https://intro.kwkang.dev/img/my.02d7c309.jpeg"
            alt="img"
            className="block w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
