
"use client";


import "./HomeAdditionsTypes.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { SwiperNavButtons } from "../WorkingProcess/SwiperSliderButton";

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
    title: "Room Addition",
    description: `Adding an entirely new room to the existing structure. This could be a bedroom, bathroom, home office, or a family room.`,
  },
  {
    title: "Second Story Addition",
    description: `Adding a new floor above the existing home, effectively doubling the floor space. This is ideal when there is limited land space areas.`,
  },
  {
    title: "Bump-Out Addition",
    description: `Extending the footprint of an existing room outward. This can be done to expand a kitchen, or dining area, or to create a master bedroom`
  },
  {
    title: "Sunroom or Conservatory",
    description: `Adding a glass-enclosed room that provides a bright and airy space for relaxation or indoor gardening.`,
  },
  {
    title: "Garage Conversion",
    description: `Converting an existing garage into a livable space, such as a guest suite, home office, or gym.`,
  },
  {
    title: "Accessory Dwelling Unit (ADU)",
    description: `Building a separate structure on the property, like a detached guest house or granny flat, which can serve as a rental unit.`,
  },  
  {
    title: "In-Law Suite",
    description: `Creating a self-contained living area within the home for aging parents or relatives, typically with a bedroom, bathroom.`,
  },
  {
    title: "Porches and Decks",
    description: `Adding covered or uncovered outdoor living spaces that expand the usable area of the home, providing space for entertaining.`,
  }  
];

const HomeAdditionsTypes = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
      <div className="">
        <div className="text-center">
          <div className="flex justify-center gap-[54px]">
          <HeadingIcon text={headingIconText.homeAdditionTypes__headingIconText}/>
          </div>
          <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pb-[25px] pt-[5px]">
          Types of Home Additions
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

export default HomeAdditionsTypes;
