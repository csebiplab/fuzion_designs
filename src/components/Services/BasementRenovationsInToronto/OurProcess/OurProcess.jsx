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
import "./OurProcess.css";

import ourProcess1 from "../../../../../public/assets/basement_renovation/ourProcess1.png";
import ourProcess2 from "../../../../../public/assets/basement_renovation/ourProcess2.png";
import ourProcess3 from "../../../../../public/assets/basement_renovation/ourProcess3.png";
import ourProcess4 from "../../../../../public/assets/basement_renovation/ourProcess4.png";
import ourProcess5 from "../../../../../public/assets/basement_renovation/ourProcess5.png";
import ourProcess6 from "../../../../../public/assets/basement_renovation/ourProcess6.png";
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
    desc: "We begin with a detailed discussion to understand your vision, requirements, and budget for your basement renovation project. This is an opportunity for us to assess the space and provide initial ideas and suggestions.",
    title: "Initial Consultation",
    img: ourProcess1,
  },
  {
    desc: "Our experienced team works closely with you to create a customized design that meets your needs and reflects your style. We develop detailed architectural plans and 3D renderings to visualize the proposed layout and features.",
    title: "Design Phase",
    img: ourProcess2,
  },
  {
    desc: "We guide you through selecting materials, finishes, and fixtures that align with your aesthetic preferences and budget. Every detail is carefully chosen from flooring and cabinetry to lighting and plumbing fixtures.",
    title: "Selection of Material & Finish",
    img: ourProcess3,
  },
  {
    desc: "We handle the necessary permits and approvals required for the renovation, ensuring compliance with local building codes and regulations.",
    title: "Permits and Approvals",
    img: ourProcess4,
  },
  {
    desc: "Once all plans and permits are in place, our skilled craftsmen begin the construction phase. We prioritize quality workmanship and attention to detail, keeping you informed of progress every step of the way.",
    title: "Construction",
    img: ourProcess5,
  },
  {
    desc: "As we near completion, we focus on the finishing touches to bring your vision to life. Our contractors conduct a thorough inspection to ensure everything meets our high standards and your satisfaction.",
    title: "Final Touches and Completion",
    img: ourProcess6,
  }
];

const OurProcess = () => {
  return (
    <div className="!overflow-hidden">
      <div className="padding__top">
        <div className="container">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.ourProcess__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pt-[6px]">
            Our Basement Finishing & Renovations Process
            </h3>
            <p className="text-lg font-normal text-center text-black pt-[10px]">At Fuzion Designs, we've perfected a streamlined process for basement finishing and renovations in Toronto that ensures a seamless and satisfying experience from start to finish.</p>
          </div>

          <div className=" mt-[60px]">
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

export default OurProcess;
