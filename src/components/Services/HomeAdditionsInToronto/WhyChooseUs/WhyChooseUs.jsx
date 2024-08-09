"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import "./WhyChooseUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "Delays in project timelines",
  },
  {
    title: "Higher-than-expected costs",
  },
  {
    title: "Communication issues",
  },
  {
    title: "Quality of workmanship concerns",
  },
  {
    title: "Difficulty in resolving post-project",
  },
  {
    title: "Lack of transparency in pricing",
  },
  {
    title: "Limited flexibility in accommodating",
  },
  {
    title: "Inconsistent project management",
  },
  {
    title: "Difficulty in obtaining necessary.",
  },
  {
    title: "Subcontractor reliability issues",
  }
];
const easyPool = [
  {
    title: "High-quality craftsmanship",
  },
  {
    title: "Excellent customer service",
  },
  {
    title: "Timely project completion",
  },
  {
    title: "Transparent communication",
  },
  {
    title: "Creative design solutions",
  },
  {
    title: "Attention to detail",
  },
  {
    title: "Commitment to client satisfaction",
  },
  {
    title: "Experienced and knowledgeable staff",
  },
  {
    title: "Ability to handle complex projects",
  },
  {
    title: "Strong reputation in the industry",
  }
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              
              <HeadingIcon text={headingIconText.whyChooseUs__headingIconText}/>
              </div>

              <div>
                <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left">
                Why Choose Fuzion Designs
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                Choosing Fuzion Designs means choosing a partner dedicated to transforming your vision into reality with professionalism, creativity, and a commitment to excellence.

                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Usual Company
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icon/cross.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-xs md:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-lg font-bold">
              Fuzion Designs
              </p>
              <div className=" grid grid-rows-8 3xl:py-[35px] py-[25px]  px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/icon/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-xs md:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;