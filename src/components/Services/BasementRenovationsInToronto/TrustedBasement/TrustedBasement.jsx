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
  "/assets/basement_renovation/trustedBasement1.png",
  "/assets/basement_renovation/trustedBasement2.png",
  "/assets/basement_renovation/trustedBasement3.png",
  "/assets/basement_renovation/trustedBasement4.png",
  "/assets/basement_renovation/trustedBasement5.png",
];

const TrustedBasement = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[36px]">
          <div className="order-2 md:order-1 md:col-span-3">
            <div>
              <div className="flex justify-center md:justify-start">
                <HeadingIcon
                  text={headingIconText.trustedBasement__headingIconText}
                />
              </div>

              <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">
                Trusted Basement Renovations Services Toronto
              </h3>
              <p className="text-black text-lg font-normal text-center md:text-left">
              Fuzion Designs stands as a beacon of reliability and excellence in trusted basement renovations in Toronto. With a solid reputation built on years of superior craftsmanship and client satisfaction, we specialize in transforming basements into stunning spaces. At Fuzion Designs, we believe in the power of personalized service. Whether you're looking to create a cozy family retreat, a functional home office, a stylish entertainment area, or any other customized space, we have the expertise to deliver exceptional results. Our basement renovation contractor's commitment to quality is evident in every aspect of our work. We use only the finest materials and employ skilled tradespeople who ensure meticulous attention to detail and craftsmanship. With Fuzion Designs, you can trust that your basement renovation project will be handled with professionalism and integrity, resulting in a space that enhances your home's value and functionality.
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

export default TrustedBasement;
