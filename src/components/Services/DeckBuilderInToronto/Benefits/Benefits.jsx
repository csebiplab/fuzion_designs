
"use client";


import "./Benefits.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { SwiperNavButtons } from "../../HomeAdditionsInToronto/WorkingProcess/SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1536: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const slideData = [
  {
    title: "Increased Living Space",
    description: `A deck expands your usable living area, providing an outdoor space for relaxation, entertaining guests, or enjoying meals with family.`,
  },
  {
    title: "Enhanced Property Value",
    description: `Well-designed decks can increase the resale value of your home, making it more attractive to potential buyers.`,
  },
  {
    title: "Outdoor Enjoyment",
    description: `Toronto's summers are perfect for enjoying outdoor activities. A deck provides a comfortable and inviting space to soak up the sun.`,
  },
  {
    title: "Customization Options",
    description: `ou can customize your deck to suit your lifestyle and preferences, from choosing the materials and layout to adding features like built-in.`,
  },
  {
    title: "Connection with Nature",
    description: `Having a deck allows you to connect more closely with nature, whether you're enjoying the views of your garden or watching`,
  },
  {
    title: "Versatility",
    description: `Decks can be used year-round with the right design and accessories, offering a versatile space that adapts to different activities`
  },
  {
    title: "Low Maintenance",
    description: `Modern decking materials are designed to be durable and low maintenance, requiring minimal upkeep compared to other outdoor.`
  },
];

const Benefits = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center">
          <div className="flex justify-center gap-[54px]">
          <HeadingIcon text={headingIconText.benefits__headingIconText}/>
          </div>
          <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pb-[25px] pt-[5px]">
          Benefits of Building a Deck in Toronto
          </h3>
        </div>

        {/* ==================== swiper slider ================ */}
        <Swiper
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
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`py-[14px] px-[6px] !h-auto !md:h-full`}>
              <div className="w-full !h-full  card-sd bg-primary">
                <div className="text-center py-[14px] px-[6px]">
                  <h4 className="text-lg font-bold text-center text-[#1E1E1E]">
                    {slideInfo?.title}
                  </h4>
                  <p className="text-base font-normal text-center text-black">
                    {slideInfo?.description}
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
    
  );
};

export default Benefits;
