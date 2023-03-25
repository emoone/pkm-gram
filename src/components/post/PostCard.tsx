import { useCallback, useState } from 'react';

export default function PostCard() {
  //TODO: 만들어야함. 기본적인 이미지만 넣어놨음.
  const [hover, sethover] = useState<boolean>(false);

  const onHover = useCallback(
    (isHover: boolean) => {
      if (hover === isHover) return;
      sethover(isHover);
    },
    [hover],
  );

  console.log(hover);

  return (
    <div
      className="max-w-[310px] aspect-[1/1] relative cursor-pointer"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}>
      <img src="https://intro.kwkang.dev/img/my.02d7c309.jpeg" alt="img" />
      {hover && (
        <div className="absolute bg-[rgba(0,0,0,0.3)] top-0 left-0 w-full h-full flex flex-row gap-3 justify-center items-center">
          <div className="text-white flex flex-row gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
            </svg>
            <span>100만</span>
          </div>
          <div className="text-white flex flex-row gap-3">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd">
              <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
            </svg>
            <span>100만</span>
          </div>
        </div>
      )}
    </div>
  );
}
