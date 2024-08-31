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
import "./Benefits.css";

import benefit1 from "../../../../../public/assets/fuzion_design_home/benefit1.png";
import benefit2 from "../../../../../public/assets/fuzion_design_home/benefit2.png";
import benefit3 from "../../../../../public/assets/fuzion_design_home/benefit3.png";
import benefit4 from "../../../../../public/assets/fuzion_design_home/benefit4.png";
import benefit5 from "../../../../../public/assets/fuzion_design_home/benefit5.png";
import benefit6 from "../../../../../public/assets/fuzion_design_home/benefit6.png";
import benefit7 from "../../../../../public/assets/fuzion_design_home/benefit7.png";
import benefit8 from "../../../../../public/assets/fuzion_design_home/benefit8.png";
import benefit9 from "../../../../../public/assets/fuzion_design_home/benefit9.png";
import benefit10 from "../../../../../public/assets/fuzion_design_home/benefit10.png";
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
    desc: "Add extra bedrooms, bathrooms, or living areas to accommodate growing families or changing lifestyle needs.",
    title: "Increased Living Space",
    img: benefit1,
  },
  {
    desc: "Improve the functionality of your home by adding specialized spaces like home offices, gyms, or entertainment rooms.",
    title: "Enhanced Functionality",
    img: benefit2,
  },
  {
    desc: "Customize your living environment to reflect your style preferences and functional requirements.",
    title: "Personalization",
    img: benefit3,
  },
  {
    desc: "Well-executed additions can increase the resale value of your home by expanding usable square footage and modernizing",
    title: "Increased Property Value",
    img: benefit4,
  },
  {
    desc: "Save money on moving expenses and the hassle of relocating by improving your current home to meet your needs.",
    title: "Avoid Moving Costs",
    img: benefit5,
  },
  {
    desc: "Incorporate energy-efficient materials and systems into your addition to lower utility bills and reduce environmental impact.",
    title: "Energy Efficiency",
    img: benefit6,
  },
  {
    desc: "Enjoy the comfort of additional space tailored to your specific needs, enhancing daily living and relaxation.",
    title: "Improved Comfort",
    img: benefit7,
  },
  {
    desc: "Improve the overall appearance of your home with cohesive design elements that integrate seamlessly with existing.",
    title: "Enhanced Aesthetics",
    img: benefit8,
  },
  {
    desc: "Create a sanctuary within your home, such as a spa-like bathroom or a serene sunroom, for relaxation and rejuvenation.",
    title: "Personal Retreat",
    img: benefit9,
  },
  {
    desc: "Provide more space for family gatherings and activities, fostering stronger relationships and a sense of togetherness.",
    title: "Family Cohesion",
    img: benefit10,
  }
];

const Benefits = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.benefits__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pt-[6px]">
            Benefits of Home Additions
            </h3>
          </div>

          <div className="mt-[60px]">
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
                        height={108}
                        width={108}
                        className=" w-[108px] h-[108px] border-2 border-primary p-1 rounded-full bg-white"
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

export default Benefits;
