"use client";
import React from "react";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./HowMuchCost.css";

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
  },
};

const howMuchCostData = [
  {
    id: 1,
    img: "/assets/kitchen_renovation/hmc1.png",
    title: "Materials",
    desc: "The quality of cabinets, countertops, flooring, and appliances significantly impact costs.",
  },
  {
    id: 2,
    img: "/assets/kitchen_renovation/hmc2.png",
    title: "Labor",
    desc: "Skilled labor costs for demolition, installation, plumbing, and electrical work.",
  },
  {
    id: 3,
    img: "/assets/kitchen_renovation/hmc3.png",
    title: "Design Complexity",
    desc: "Custom designs or architectural changes may increase costs.",
  },
  {
    id: 4,
    img: "/assets/kitchen_renovation/hmc4.png",
    title: "Permits and Fees",
    desc: "Custom designs or architectural changes may increase costs.",
  },
];

const HowMuchCost = () => {
  return (
    <div>
      <div className="full__section_r_p pl-3 md:pl-0 padding__top">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
          <div className="order-2 md:col-span-3">
            <div className="!overflow-hidden">
              <div className="flex justify-center md:justify-start">
                <HeadingIcon
                  text={headingIconText.howMuchCost__headingIconText}
                />
              </div>

              <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">
                How Much Does a Kitchen Renovation Cost in Toronto
              </h3>
              <p className="text-black text-lg font-normal text-center md:text-left mb-[120px]">
                The cost of a kitchen renovation in Toronto can vary widely
                depending on several factors such as the size of the kitchen,
                the scope of work, quality of materials, and the contractor's
                pricing structure. As of recent estimates, a moderate kitchen
                renovation in Toronto typically ranges from <b>CAD 20,000</b> to{" "}
                <b>CAD 40,000.</b> However, for high-end renovations or
                extensive remodels involving structural changes or luxury
                materials, costs can exceed <b>CAD 50,000</b> or more.{" "}
                <b>Key cost factors include:</b>{" "}
              </p>

              {/* ==================== swiper slider ================ */}
              <Swiper
                className=" !overflow-visible"
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
                {howMuchCostData?.map((data) => (
                  <SwiperSlide key={data.id} className={` bg-primary !h-auto !md:h-full`}>
                    <div className="mx-[30px] mb-[30px] border-2 border-white h-[193px] -mt-16 cart_bg">
                      <Image
                        src={data.img}
                        alt="how much cost image"
                        width={74}
                        height={74}
                        className="-mt-10 w-[74px] h-[74px] mx-auto p-2 rounded-full border-2 shadow-lg bg-white"
                      />
                      <h5 className="pt-[20px] text-[25px] text-black font-bold text-center">
                        {data.title}
                      </h5>
                      <p className="text-lg pb-[30px] font-normal text-center text-black pt-[5px]">
                        {data.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="order-1 md:col-span-3">
            <div>
              <Image
                src="/assets/kitchen_renovation/Expert Kitchen Renovation.png"
                alt="expert kitchen renovation image"
                width={770}
                height={545}
                className="w-[770px] h-[376px] md:h-[545px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMuchCost;
