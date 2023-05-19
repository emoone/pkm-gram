import { useEffect, useState } from 'react';

import cn from 'clsx';

export default function LoginBanner() {
  const [currentIdx, setCurrentIdx] = useState(0);
  useEffect(() => {
    let start = 0;
    setInterval(() => {
      if (start < 4) {
        setCurrentIdx(start++);
      } else {
        start = 0;
        setCurrentIdx(start);
      }
    }, 5000);
  }, []);

  return (
    <div
      className="phoneImg relative hidden md:h-[581px] md:block bg-[url('/public/images/bg/signup_bg.png')] basis-[380.32px] bg-no-repeat bg-[length:468.32px_634.15px] bg-[left_calc(-46px)_top_calc(0%)]
      ">
      <div className=" relative mt-[27px] flex flex-col items-stretch ml-[113px]">
        {[...Array(4)].map((item, index) => {
          return (
            <img
              className={cn(
                'w-[250px] h-[538.84px] opacity-0 transition duration-[1.5s] absolute top-0 left-0 ease-out',
                {
                  ['opacity-100 visible']: currentIdx === index,
                },
              )}
              key={index}
              src={`/images/bg/img_item_0${index + 1}.png`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
