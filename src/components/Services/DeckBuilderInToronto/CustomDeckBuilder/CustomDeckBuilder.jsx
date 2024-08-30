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
  "/assets/deck_builder/cdb1.png",
  "/assets/deck_builder/cdb2.png",
  "/assets/deck_builder/cdb3.png",
  "/assets/deck_builder/cdb4.png",
  "/assets/deck_builder/cdb5.png",
];

const CustomDeckBuilder = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[36px]">
          <div className="order-2 md:order-1 md:col-span-3">
            <div>
              <div className="flex justify-center md:justify-start">
                <HeadingIcon
                  text={headingIconText.customDeckBuilder__headingIconText}
                />
              </div>

              <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">
              Custom Deck Builder & Contractor Toronto
              </h3>
              <p className="text-black text-lg font-normal text-center md:text-left">
              Fuzion Designs excels in Toronto as a top-notch deck builder and contractor, combining expert craftsmanship with creative flair to elevate outdoor living spaces. With a focus on innovative design and meticulous craftsmanship, we collaborate closely with clients to bring their visions to life. Our team of skilled professionals combines years of expertise with a passion for creating functional and aesthetically pleasing decks. We use only the finest materials and cutting-edge construction techniques to ensure durability and longevity, tailored to withstand Toronto's climate. Whether you desire a cozy backyard escape or a spacious entertaining area, Fuzion Designs delivers unparalleled service and attention to detail at every project stage. From initial consultation and design to final installation, we prioritize client satisfaction, aiming to exceed expectations with every custom deck we build.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-2">
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
                        className="w-full h-[235px] md:h-[440px] "
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

export default CustomDeckBuilder;
