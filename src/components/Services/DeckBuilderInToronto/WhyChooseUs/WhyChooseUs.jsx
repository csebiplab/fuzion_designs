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
import "./WhyChooseUs.css";

import img1 from "../../../../../public/assets/deck_builder/wcu1.png";
import img2 from "../../../../../public/assets/deck_builder/wcu2.png";
import img3 from "../../../../../public/assets/deck_builder/wcu3.png";
import img4 from "../../../../../public/assets/deck_builder/wcu4.png";
import img5 from "../../../../../public/assets/deck_builder/wcu5.png";
import img6 from "../../../../../public/assets/deck_builder/wcu6.png";

import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwiperNavButtons } from "../../HomeAdditionsInToronto/WorkingProcess/SwiperSliderButton";
// import { SwiperNavButtons } from "../WorkingProcess/SwiperSliderButton";

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
    desc: "Our team brings years of experience and expertise in deck building, ensuring quality craftsmanship and attention to detail in every project.",
    title: "Expertise and Experience",
    img: img1,
  },
  {
    desc: "We specialize in creating custom decks tailored to your preferences and lifestyle, offering personalized design options and materials to suit your needs.",
    title: "Customization",
    img: img2,
  },
  {
    desc: "We use only the highest quality materials sourced for durability and aesthetic appeal, ensuring your deck stands the test of time and enhances your home's value.",
    title: "Quality Materials",
    img: img3,
  },
  {
    desc: "From modern to traditional styles, we incorporate innovative design elements that elevate your outdoor living space and complement your home's architecture.",
    title: "Innovative Design",
    img: img4,
  },
  {
    desc: "We prioritize clear communication, transparency, and client satisfaction throughout the entire process, ensuring your vision becomes a reality.",
    title: "Customer Focus",
    img: img5,
  },
  {
    desc: "As a trusted Toronto-based company, we understand local building codes, climate considerations, and neighborhood aesthetics, ensuring compliance",
    title: "Local Expertise",
    img: img6,
  }
];

const WhyChooseUs = () => {
  return (
    <div className="!overflow-hidden">
      <div className="padding__top">
        <div className="container">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.whyChooseUs__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pt-[6px]">
            Why Choose Our Toronto Deck Builder
            </h3>
            <p className="text-lg font-normal text-center text-black pt-[10px]">Choosing Fuzion Designs as your Toronto deck builder ensures you benefit from our commitment to excellence, innovation, and customer satisfaction. With a proven track record of creating stunning outdoor spaces, here's why you should choose us:</p>
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

export default WhyChooseUs;
