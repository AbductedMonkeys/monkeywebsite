
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Image from "next/image";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function CustSwiper({ pictures }) {
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        className="w-auto h-96"
      >
        {pictures.map((picture) => (
          <SwiperSlide key={picture.id} className="">
            <div className='flex h-full w-full items-center justify-center'>
            <Image className="block h-full w-full object-cover" src={picture.src} alt={picture.alt} />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

