"use client"
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./RemodelDesign.css";

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

const remodelDesignImage = [
  "/assets/bathroom_renovation/rd1.png",
  "/assets/bathroom_renovation/rd2.png",
  "/assets/bathroom_renovation/rd3.png",
  "/assets/bathroom_renovation/rd4.png",
  "/assets/bathroom_renovation/rd5.png",
];

const RemodelDesign = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
          <div className="order-1 md:order-2 md:col-span-3 ">
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
                {remodelDesignImage.map((slideInfo, index) => (
                  <SwiperSlide
                    key={index}
                    className={`!h-auto !md:h-full`}
                  >
                    <div className="">
                      <Image
                        src={slideInfo}
                        alt="Remodel Design image"
                        height={540}
                        width={585}
                        className="w-full h-[233px] md:h-[540px] "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="order-2 md:order-1 md:col-span-3 flex flex-col items-center md:items-start justify-center">
            <div className="pb-[5px] ">
              <HeadingIcon
                text={headingIconText.remodelDesign__headingIconText}
              />
            </div>

            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">
            Remodel & Design Your Bathroom Perfectly
            </h3>
            <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">
            At Fuzion Designs, we specialize in helping you remodel and design your bathroom perfectly in Toronto. With our expertise in renovation and design, we transform your vision into reality with meticulous attention to detail and quality craftsmanship. Our process begins with a thorough consultation to understand your aesthetic preferences, functional needs, and budgetary considerations. We pride ourselves on using premium materials and employing skilled tradespeople who uphold our commitment to excellence. From updating fixtures and optimizing storage solutions to complete layout redesigns and luxurious finishes, we handle every aspect of your bathroom remodel with precision and care. Throughout the remodeling process, we maintain a commitment to using high-quality materials and employing skilled craftsmen who ensure superior workmanship. At Fuzion Designs, we believe in providing exceptional customer service and strive to create a positive experience for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemodelDesign;
