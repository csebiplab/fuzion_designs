"use client";

import "./WorkingProcess.css";

import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { SwiperNavButtons } from "./SwiperSliderButton";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";


const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 40,
  },
  767: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const services = [
  {
    img: "/assets/icon/wp1.png",
    title: "Consultation and Planning",
    para: "Our contractors begin by understanding your vision and requirements through detailed consultations. We assess the space, discuss design ideas, and establish project goals.",
  },
  {
    img: "/assets/icon/wp2.png",
    title: "Design and Proposal",
    para: "Our team collaborates closely with you to create a tailored design that meets your needs and budget. We present comprehensive proposals outlining timelines, costs, and materials.",
  },
  {
    img: "/assets/icon/wp3.png",
    title: "Permits and Approvals",
    para: "We handle all necessary permits and approvals from local authorities to ensure compliance with building codes and regulations.",
  },
  {
    img: "/assets/icon/wp4.png",
    title: "Construction Phase",
    para: "Skilled craftsmen and contractors execute the project with attention to detail and quality. We maintain clear communication throughout, keeping you updated on progress.",
  },
  {
    img: "/assets/icon/wp5.png",
    title: "Quality Assurance",
    para: "We conduct rigorous inspections and quality checks at every stage to ensure workmanship and materials meet our high standards.",
  },
  {
    img: "/assets/icon/wp6.png",
    title: "Completion and Handover",
    para: "Upon completion, we conduct a final walkthrough to ensure your satisfaction. We guide maintenance and warranty information.",
  },
  {
    img: "/assets/icon/wp7.png",
    title: "Customer Satisfaction",
    para: "Our commitment to your satisfaction continues post-project. Our contractors strive to build lasting relationships based on trust, reliability, and exceptional service.",
  },
];

const WorkingProcess = () => {
  return (
    <div className="">
      <div className="!overflow-hidden padding__top">
        <div className="">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center lg:justify-normal items-center">
                <HeadingIcon text={headingIconText.workingProcess__headingIconText}/>
              </div>
              <h3 className="text-[34px] md:text-[36px] lg:text-[37px] xl:text-[38px] 2xl:text-[39px] 3xl:text-[40px] 4xl:text-[41px] 5xl:text-[42px] leading-normal font-bold text-black text-center pb-[10px]">
              Working Process of Our Contractors
              </h3>
              <p className="text-lg font-normal text-black text-center pb-[25px]">Our contractors at Fuzion Designs follow a meticulous working process to ensure every project is executed with precision and care. Here's how we work:</p>
            </div>

            <div className="w-full h-[3px] bg-[#1FE0BA]" />

            <div className="">
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
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="">

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-[#1FE0BA]" />
                      </div>
                    </div>
                      
                    <div className="">
                      <Image
                        src={service.img}
                        width={81}
                        height={81}
                        alt="benifits image"
                        className="w-[81px] h-[81px] mx-auto p-2 border-2 border-[#1FE0BA] rounded-full"
                      />
                    </div>

                    <div className="">
                      <div className="flex justify-around ">
                        <div className="w-[3px] h-[40px] bg-[#1FE0BA]" />
                      </div>
                    </div>
                    

                    <div className="mx-auto w-[310px] md:w-[380px] lg:w-[390px] xl:w-[400px] 2xl:w-[410px] 3xl:w-[420px] 4xl:w-[430px] 5xl:w-[437px] h-[220px] 5xl:h-[167px] cart px-[12px] py-[11px]">
                      <div className="">
                        <h5 className="text-black text-center text-[20px] font-bold py-[9px]">
                          {service.title}{" "}
                        </h5>
                        <p className="text-[#0C1C3C] text-center text-base font-normal">
                          {service.para}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavButtons/>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;