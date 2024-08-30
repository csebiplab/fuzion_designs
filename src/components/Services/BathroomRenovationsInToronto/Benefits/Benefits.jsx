
"use client";


import "./Benefits.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { SwiperNavButtons } from "../../HomeAdditionsInToronto/WorkingProcess/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const slideData = [
  {
    title: "Customized Designs",
    description: `We tailor every renovation to your unique preferences and lifestyle, ensuring your bathroom reflects your style and functional needs.`,
  },
  {
    title: "Expertise and Experience",
    description: `With years of experience, our team brings expertise in design, construction, and project management to deliver high-quality results.`,
  },
  {
    title: "Quality Materials",
    description: `We use premium materials and finishes that enhance durability, aesthetics, and long-term value.`,
  },
  {
    title: "Attention to Detail",
    description: `From initial consultation to final touches, we prioritize meticulous craftsmanship and attention to detail.`,
  },
  {
    title: "Efficiency and Timeliness",
    description: `We strive to complete projects on time and within budget, minimizing disruption to your daily life.`,
  },
  {
    title: "Enhanced Functionality",
    description: `Our renovations improve the functionality of your bathroom with optimized layouts and modern fixtures.`
  },
  {
    title: "Increase in Property Value",
    description: `A professionally renovated bathroom can increase the value and appeal of your home.`
  },
  {
    title: "Customer Satisfaction",
    description: `We prioritize clear communication, transparency, and client satisfaction throughout the renovation process.`
  },
];

const Benefits = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center">
          <div className="flex justify-center gap-[54px]">
          <HeadingIcon text={headingIconText.benefits__headingIconText}/>
          </div>
          <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pb-[25px] pt-[5px]">
          Benefits of Your Bathroom Renovations With Us
          </h3>
        </div>

        {/* ==================== swiper slider ================ */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`py-[14px] px-[6px] !h-auto !md:h-full`}>
              <div className="w-full !h-full  card-sd bg-primary">
                <div className="text-center py-[14px] px-[6px]">
                  <h4 className="text-lg font-bold text-center text-[#1E1E1E]">
                    {slideInfo?.title}
                  </h4>
                  <p className="text-base font-normal text-center text-black">
                    {slideInfo?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons/>
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default Benefits;
