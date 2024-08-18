
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
    title: "Expertise and Experience",
    description: `Our team brings extensive knowledge and skill to every project, ensuring professional execution and high-quality results.`,
  },
  {
    title: "Customized Solutions",
    description: `We tailor each renovation to meet your specific needs, preferences, and budget, creating a kitchen that reflects your lifestyle and aesthetic.`,
  },
  {
    title: "Comprehensive Services",
    description: `From initial consultation and design to final installation and cleanup, we handle every aspect of the renovation process seamlessly.`,
  },
  {
    title: "Quality Materials & Craftsman",
    description: `We use premium materials and employ skilled craftsmen to ensure durability, functionality, and aesthetic appeal in every detail.`,
  },
  {
    title: "Project Management",
    description: `Our efficient project management ensures timelines are met, budgets are adhered to, and communication is clear throughout the entire`,
  },
  {
    title: "Client Satisfaction",
    description: `We prioritize your satisfaction, striving to exceed your expectations with exceptional service, attention to detail, and personalized care.`
  },
  {
    title: "Local Expertise",
    description: `With a deep understanding of Toronto's building codes, regulations, and design trends, we navigate the renovation process.`
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
          Benefits of Working With Our Kitchen Renovators Toronto
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
