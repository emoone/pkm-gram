import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Arrow } from '../../uis/icons';
import cn from 'clsx';

interface PropsType {
  images: any[];
}

/**
 * feed 이미지 Component, 메인, modal 등 재사용 목적으로 만듬
 * @returns
 */
export function FeedImg() {
  return (
    <section className="relative overflow-hidden imgCon rounded-3">
      <Swiper
        className="swiperCon"
        navigation={{
          prevEl: '#arrowPrev',
          nextEl: '#arrowNext',
          disabledClass: 'hidden',
        }}
        pagination={{
          el: '#paginationCon',
          clickable: true,
          bulletClass: 'bullet',
          bulletActiveClass: 'active',
        }}
        modules={[Navigation, Pagination]}>
        {[...Array(10)].map((item, index) => {
          return (
            <SwiperSlide key={index} tag="div" className="aspect-[1/1]">
              <picture className="block bg-red-300">
                <source />
                <img
                  className="aspect-[1/1]"
                  src="/images/sample/img_sample.jpeg"
                  alt=""
                />
              </picture>
            </SwiperSlide>
          );
        })}
        <button
          id="arrowPrev"
          type="button"
          className="absolute bg-opacity-60 p-[9px] rounded-[50px] z-[1] w-[30px] h-[30px] bg-white top-1/2 -translate-y-1/2 left-[8px] transform -scale-100">
          <Arrow className="" width={'30'} height={'30'} />
        </button>
        <button
          id="arrowNext"
          type="button"
          className="absolute bg-opacity-60 p-[9px] rounded-[50px] z-[1] w-[30px] h-[30px] bg-white top-1/2 -translate-y-1/2 right-[8px]">
          <Arrow className="" width={'30'} height={'30'} />
        </button>

        <div
          id="paginationCon"
          className={cn(
            'absolute bottom-[8px] flex items-center justify-center z-[1] w-full gap-x-[3px]',
            '[&>span.active]:bg-opacity-100 [&>span]:bg-white [&>span]:bg-opacity-40 [&>span]:h-[5px] [&>span]:w-[5px] [&>span]:rounded-[50px]',
          )}
        />
      </Swiper>
    </section>
  );
}
