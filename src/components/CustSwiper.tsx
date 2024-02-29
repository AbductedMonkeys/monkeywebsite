
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Image from "next/image";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const props = () =>{

}

export default function CustSwiper(pictures) {
  return (
    <Swiper 
    navigation={true}
    modules={[Pagination, Navigation]} 
    className="w-2xl bg-white">
       {pictures.map((picture)=>{
            <SwiperSlide key={picture.key}>
              <Image src={picture.img} alt={picture.alt} />
            </SwiperSlide>
        }
      )} 
    </Swiper>
  )
}

