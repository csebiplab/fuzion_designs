"use client";

import { useSwiper } from "swiper/react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  
  const swiper = useSwiper();

  return (
    <div>
      {/* <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button> */}
      <>
        <div className="flex lg:gap-8 gap-3 items-center justify-center lg:py-6 py-3">
          {/* ========= first line ======== */}
          <div className="lg:w-[330px] w-[220px] h-0.5 bg-[#1FE0BA]">

          </div>
          <div className="flex lg:gap-5 gap-3">
            <button
              onClick={() => swiper.slidePrev()}
              className="p-3 rounded-full border-2 border-[#1FE0BA] hover:text-white hover:bg-[#1FE0BA]"
            >
              <FaChevronLeft className="fill-[#1FE0BA] hover:fill-white"/>
            </button>
            <button
              onClick={() => swiper.slideNext()}
              className="hover:text-white bg-[#1FE0BA]  border-2 p-3  rounded-full hover:bg-white border-[#1FE0BA]"
            >
              <FaChevronRight className='hover:fill-[#1FE0BA] fill-white'/>
            </button>
          </div>
          {/* =============== second line ============= */}
          <div className="lg:w-[330px] w-[220px] h-0.5 bg-[#1FE0BA]"></div>
        </div>
      </>
    </div>
  );
};
