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

import img1 from "../../../../../public/assets/kitchen_renovation/sos1.png";
import img2 from "../../../../../public/assets/kitchen_renovation/sos2.png";
import img3 from "../../../../../public/assets/kitchen_renovation/sos3.png";
import img4 from "../../../../../public/assets/kitchen_renovation/sos4.png";
import img5 from "../../../../../public/assets/kitchen_renovation/sos5.png";
import img6 from "../../../../../public/assets/kitchen_renovation/sos6.png";
import img7 from "../../../../../public/assets/kitchen_renovation/sos7.png";
import img8 from "../../../../../public/assets/kitchen_renovation/sos8.png";
import img9 from "../../../../../public/assets/kitchen_renovation/sos9.png";

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
    desc: "Discuss your goals, budget, & timeline with the renovation contractor. Evaluate the existing space & discuss design.",
    title: "Initial Consultation",
    img: img1,
  },
  {
    desc: "Work with a designer or architect to create a detailed plan. This includes layout changes, material selection, fixture.",
    title: "Design and Planning",
    img: img2,
  },
  {
    desc: "Clear out the existing kitchen space, including removing cabinets, countertops, appliances, and flooring as needed.",
    title: "Demolition & Preparation",
    img: img3,
  },
  {
    desc: "If necessary, make structural changes such as moving walls, windows, or doors to accommodate the new kitchen layout.",
    title: "Structural Work",
    img: img4,
  },
  {
    desc: "Update electrical wiring and plumbing systems to meet current codes & accommodate new appliances & fixtures.",
    title: "Electrical and Plumbing",
    img: img5,
  },
  {
    desc: "Install new cabinets, countertops, backsplash, flooring, lighting fixtures, & appliances according to the approved.",
    title: "Installation",
    img: img6,
  },
  {
    desc: "Apply paint or wallpaper, install trim and hardware, and make any final adjustments to ensure everything meets",
    title: "Finishing Touches",
    img: img7,
  },
  {
    desc: "Conduct a final inspection to ensure all work meets building codes and safety standards.",
    title: "Final Inspection & Cleanup",
    img: img8,
  },
  {
    desc: "Present the finished kitchen to the client, explain maintenance instructions, and address any questions or concerns.",
    title: "Completion and Handover",
    img: img9,
  }
];

const StepOfServices = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.stepOfServices__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pt-[6px]">
            Steps of Kitchen Renovation Services
            </h3>
            <p className="text-lg font-normal text-black text-center pt-[10px]">Kitchen renovation services typically follow a structured process to ensure a smooth and successful transformation of your kitchen space. Here are the general steps involved:</p>
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

export default StepOfServices;
