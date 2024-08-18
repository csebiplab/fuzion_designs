"use client"
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./TrustUsCommonDesign.css";

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
  "/assets/kitchen_renovation/tucd1.png",
  "/assets/kitchen_renovation/tucd2.png",
  "/assets/kitchen_renovation/tucd3.png",
  "/assets/kitchen_renovation/tucd4.png",
  "/assets/kitchen_renovation/tucd5.png",
];

const TrustUsCommonDesign = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
          <div className="order-2 md:col-span-3">
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
          <div className="order-1 md:col-span-3 flex flex-col items-center md:items-start justify-center">
            <div className="pb-[5px] ">
              <HeadingIcon
                text={headingIconText.trustUsCustomDesign__headingIconText}
              />
            </div>

            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">
              Trusted Custom Design & Kitchen Remodeling Firm
            </h3>
            <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">
              Fuzion Designs is Toronto's trusted custom design and kitchen
              remodeling firm, dedicated to creating bespoke spaces that blend
              functionality with aesthetic appeal. With a commitment to
              excellence and client satisfaction, we specialize in delivering
              tailored solutions for kitchen renovations. Our approach begins
              with a thorough consultation to understand your vision, lifestyle
              needs, and design preferences. From there, our team of experienced
              professionals crafts innovative designs that optimize space and
              enhance usability. Whether you envision a sleek modern kitchen, a
              cozy traditional space, or a unique fusion of styles, our company
              brings your ideas to life with precision and creativity.
            </p>
            <div className="w-full flex flex-col items-center md:items-start">
              <a href="tel:+1 416-571-0011">
                <button className="flex items-center gap-3 readyToWorkBtn text-lg font-bold text-white py-[8px] px-[19px]">
                  Get Your Free Estimate{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M20.7071 8.67683C21.0976 8.28631 21.0976 7.65314 20.7071 7.26262L14.3431 0.898659C13.9526 0.508134 13.3195 0.508134 12.9289 0.898659C12.5384 1.28918 12.5384 1.92235 12.9289 2.31287L18.5858 7.96973L12.9289 13.6266C12.5384 14.0171 12.5384 14.6503 12.9289 15.0408C13.3195 15.4313 13.9526 15.4313 14.3431 15.0408L20.7071 8.67683ZM0 8.96973L20 8.96973V6.96973L0 6.96973L0 8.96973Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
              <h5 className="text-[22px] md:text-[24px] font-semibold text-black pt-[30px]">
                or Call Us:
                <a href="tel:+1 416-571-0011">
                  {" "}
                  <span className="text-primary font-bold">
                    +1 416-571-0011
                  </span>
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUsCommonDesign;
