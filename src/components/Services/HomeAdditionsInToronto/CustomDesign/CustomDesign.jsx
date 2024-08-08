"use client";
import React from "react";
import Image from "next/image";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  }
};

const customDesignImage = [
  "/assets/fuzion_design_home/custom_design1.png",
  "/assets/fuzion_design_home/custom_design2.png",
  "/assets/fuzion_design_home/custom_design3.png",
  "/assets/fuzion_design_home/custom_design4.png",
  "/assets/fuzion_design_home/custom_design5.png",
];

const CustomDesign = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
          <div className="md:col-span-3">
            <div>
              <div className="flex justify-center md:justify-start">
                <HeadingIcon
                  text={headingIconText.customDesign__headingIconText}
                />
              </div>

              <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">
                Custom Design Build in Toronto
              </h3>
              <p className="text-black text-lg font-normal text-center md:text-left">
                Fuzion Designs offers premier custom design-build services in
                Toronto, specializing in transforming visions into reality. With
                a focus on creativity and quality, our expert team collaborates
                closely with clients to craft bespoke solutions for home
                additions, renovations, and remodeling projects. From initial
                concept through meticulous planning and skilled construction, we
                ensure every detail aligns with your lifestyle and aesthetic
                preferences. As a trusted partner, we prioritize transparency,
                communication, and exceeding expectations. Choose Fuzion Designs
                for personalized service, superior craftsmanship, and a seamless
                custom design-build experience that enhances your home's beauty
                and functionality.
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div>
              {/* ==================== swiper slider ================ */}
              <Swiper
                className=""
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
                {customDesignImage.map((slideInfo, index) => (
                  <SwiperSlide
                    key={index}
                    className={`!h-auto !md:h-full`}
                  >
                    <div className="">
                      <Image
                        src={slideInfo}
                        alt="custom Design image"
                        height={440}
                        width={585}
                        className="w-auto h-[440px] "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
