"use client";


import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "./CostOfHomeAddition.css";

import cost1 from "../../../../../public/assets/icon/cost1.png";
import cost2 from "../../../../../public/assets/icon/cost2.png";
import cost3 from "../../../../../public/assets/icon/cost3.png";
import cost4 from "../../../../../public/assets/icon/cost4.png";
import cost5 from "../../../../../public/assets/icon/cost5.png";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../WorkingProcess/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const services = [
  {
    desc: "Starting costs can range from $150 to $250 per square foot.",
    title: "Basic Room Addition",
    img: cost1,
  },
  {
    desc: "Costs can escalate to $300 to $500 per square foot or more, depending on custom features and finishes.",
    title: "High-End Room Addition",
    img: cost2,
  },
  {
    desc: "Expect costs to start around $250 per square foot and increase based on structural requirements and interior finishes.",
    title: "Second-Story Addition",
    img: cost3,
  },
  {
    desc: "Costs can range from $25,000 to $50,000 or more, depending on size, fixtures, and plumbing complexity.",
    title: "Bathroom Addition",
    img: cost4,
  },
  {
    desc: "Expect to budget from $30,000 to $100,000 or more, depending on size, layout changes, and appliance upgrades.",
    title: "Kitchen Addition",
    img: cost5,
  }
];

const CostOfHomeAddition = () => {
  return (
    <div className="!overflow-hidden">
      <div className="padding__top">
        <div className="container">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.costOfHomeAddition__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pb-[10px] pt-[6px]">
            Home Addition Cost in Toronto
            </h3>
            <p className="text-lg font-normal text-center text-black">The cost of a home addition in Toronto can vary significantly based on several factors, including the size and complexity of the project, materials used, labor costs, permits, and location. As of recent estimates:</p>
          </div>

          <div className=" mt-[30px] lg:mt-[45px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              breakpoints={breakpoints}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
              }}
              speed={3000}
              allowTouchMove={false}
              className="!px-5 md:px-0 !overflow-visible"
            >
              {services.map((service, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[#F8F4F4] border-2 rounded-[8px] border-primary !h-auto !md:h-full px-2 py-6 md:py-0"
                >
                  <div className="mx-auto relative px-2">
                    <div className="py-7">
                      <h6 className="mt-4 mx-auto text-center text-2xl font-bold">
                        {service.title}{" "}
                      </h6>
                      <h6 className="mx-auto text-center text-xs md:text-sm xl:text-base 3xl:text-lg font-normal">
                        {service.desc}{" "}
                      </h6>
                    </div>
                    <div className="absolute  -top-10 md:-top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        src={service.img}
                        height={80}
                        width={80}
                        className=" w-[80px] h-[80px] border-2 border-primary p-2 rounded-full bg-white"
                        alt="Cost of Home Addition"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfHomeAddition;
