"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../WorkingProcess/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 25,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const reviews = [
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. ",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. ",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. ",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. ",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. ",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "They Are Professional and do great job cleaning the house!!! I Locked myself out of my house the other day and they were the only ones with a key. ",
    author: "Lisa Silva",
    location: "North York",
  },
  
];

const Review = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div>
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.review__headingIconText}/>

            <div>
              <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pb-[25px]">
              Review from Clients
              </h3>
            </div>
          </div>
        </div>

        <div className="!px-10 md:px-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={4000}
            allowTouchMove={true}
            breakpoints={breakpoints}
          >
            {reviews.map((test, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div className="!h-full bg-white rounded-[9px] border border-[#CFCACA] p-[13px] ">
                  <div>
                    <Image
                      src="/assets/icon/google.png"
                      width={90}
                      height={51}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="lg:pt-2">
                    <Image
                      src="/assets/icon/review.png"
                      width={120}
                      height={18}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="text-lg font-normal text-black pt-[12px]">
                    {test.text}
                  </p>
                  <h6 className="text-[15px] font-bold text-black pt-[17px] pb-[6px]">
                    {test.author}
                  </h6>
                  <p className="text-xs font-normal text-[#4A4A4A]">{test.location}</p>
                </div>
              </SwiperSlide>
            ))}

            <div>
              <SwiperNavButtons/>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
