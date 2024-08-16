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

import img1 from "../../../../../public/assets/deck_builder/working_process1.png";
import img2 from "../../../../../public/assets/deck_builder/working_process2.png";
import img3 from "../../../../../public/assets/deck_builder/working_process3.png";
import img4 from "../../../../../public/assets/deck_builder/working_process4.png";
import img5 from "../../../../../public/assets/deck_builder/working_process5.png";
import img6 from "../../../../../public/assets/deck_builder/working_process6.png";

import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../../HomeAdditionsInToronto/WorkingProcess/SwiperSliderButton";

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
    desc: "We begin by listening carefully to your ideas and requirements, and understanding your vision",
    title: "Personalized Consultation",
    img: img1,
  },
  {
    desc: "Our skilled designers create tailored plans that reflect your preferences & incorporate innovative elements to enhance ",
    title: "Customized Design",
    img: img2,
  },
  {
    desc: "We source only the highest quality materials, selected for their durability, sustainability, and visual appeal, ensuring ",
    title: "Quality Materials",
    img: img3,
  },
  {
    desc: "Our experienced craftsmen execute each phase with precision and care, adhering to strict quality standards and timelines.",
    title: "Expert Construction",
    img: img4,
  },
  {
    desc: "We maintain open and clear communication throughout the project, keeping you informed & involved.",
    title: "Transparent Communication",
    img: img5,
  },
  {
    desc: "Upon completion, we conduct a thorough inspection to ensure every detail meets our rigorous standards and exceeds.",
    title: "Final Inspection & Satisfaction",
    img: img6,
  }
];

const WorkingProcess = () => {
  return (
    <div className="!overflow-hidden">
      <div className="padding__top">
        <div className="container">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.workingProcess__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pt-[6px]">
            Unique Working Process of Our Deck Builder
            </h3>
            <p className="text-lg font-normal text-center text-black pt-[10px]">At Fuzion Designs, our deck-building process is distinguished by our commitment to creativity, craftsmanship, and client satisfaction. Here's how we ensure a unique and successful project:</p>
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

export default WorkingProcess;
