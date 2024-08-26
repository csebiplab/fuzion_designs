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
    img: "/assets/bathroom_renovation/hmci1.png",
    title: "Basic Renovation",
    desc: (
      <p>
        A basic bathroom renovation focusing on cosmetic upgrades like new
        fixtures, tiles, and paint can range from <strong>$5,000</strong> to <strong>$15,000.</strong>
      </p>
    ),
  },
  {
    id: 2,
    img: "/assets/bathroom_renovation/hmci2.png",
    title: "Mid-Range Renovation",
    desc: (
      <p>
        This might include more extensive upgrades such as replacing the bathtub/shower, vanity, flooring, and lighting. Costs typically range from <strong>$15,000</strong> to <strong>$30,000.</strong> 
      </p>
    )
  },
  {
    id: 3,
    img: "/assets/bathroom_renovation/hmci3.png",
    title: "High-End Renovation",
    desc: (
      <p>For luxury renovations with custom features, high-end materials, and structural changes, costs can start from <strong>$30,000</strong> and go well above depending on the complexity and materials used.</p>
    )
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
                How Much Bathroom Renovation Cost Toronto
              </h3>
              <p className="text-black text-lg font-normal text-center md:text-left mb-[120px]">
                The cost of bathroom renovation in Toronto can vary widely
                depending on several factors such as the size of the bathroom,
                the scope of work, quality of materials, and the contractor's
                fees. It's important to note that these estimates are
                approximate and can vary significantly based on individual
                project requirements. Factors such as plumbing and electrical
                upgrades, waterproofing, demolition, and disposal costs also
                contribute to the overall expense.
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
                  <SwiperSlide
                    key={data.id}
                    className={` bg-primary !h-auto !md:h-full`}
                  >
                    <div className="mx-[30px] mb-[30px] border-2 border-white h-[240px] md:h-[210px] -mt-16 cart_bg">
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
                      <p className="text-base md:text-lg pb-[30px] font-normal text-center text-black pt-[5px] px-[9px]">
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
                src="/assets/bathroom_renovation/How Much Cost.png"
                alt="How much cost image"
                width={768}
                height={667}
                className="w-[768px] h-[377px] md:h-[667px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowMuchCost;
