
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
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const slideData = [
  {
    title: "Customized Design Solutions",
    description: `Fuzion Designs specializes in creating bespoke basement designs that reflect your unique style and functional needs. Whether you desire a home theater, a gym, an office space, or a play area, we tailor the renovation to meet your specific requirements.`,
  },
  {
    title: "Maximized Space Utilization",
    description: `We excel in optimizing the use of your basement space, making the most out of every square foot. Our designs focus on maximizing functionality while maintaining a visually appealing layout.`,
  },
  {
    title: "Energy Efficiency Enhancements",
    description: `We integrate energy-efficient solutions into our renovations, such as improved insulation, LED lighting options, and energy-efficient appliances. This helps reduce energy costs and contributes to a more sustainable living environment.`,
  },
  {
    title: "Comprehensive Project Management",
    description: `Fuzion Designs manages every aspect of your basement renovation project, from initial consultation and design to construction and completion. We ensure a smooth and efficient process, minimizing disruption to your daily life.`,
  },
  {
    title: "Advanced Technology Integration",
    description: `Our expertise extends to integrating the latest smart home technologies into your basement renovation. From automated lighting and temperature controls to state-of-the-art entertainment systems, we enhance your living experience with cutting-edge technology.`,
  },
  {
    title: "Long-Term Investment",
    description: `Renovating your basement with Fuzion Designs is a long-term investment in your home. Our renovations not only improve your immediate living conditions but also provide lasting value and enjoyment for years to come.`,
  }
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
          Benefits of Basement Renovations
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
