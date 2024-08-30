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
    title: "Unexpected cost overruns",
  },
  {
    title: "Communication challenges",
  },
  {
    title: "Quality of workmanship concerns",
  },
  {
    title: "Limited flexibility",
  },
  {
    title: "Difficulty in resolving post-project",
  },
  {
    title: "Inconsistency in project updates",
  },
  {
    title: "Issues with subcontractor coordination",
  },
  {
    title: "Lack of transparency in pricing",
  },
  {
    title: "Inadequate cleanup after completion",
  }
];
const easyPool = [
  {
    title: "Timely project completion",
  },
  {
    title: "Clear communication",
  },
  {
    title: "High-quality craftsmanship",
  },
  {
    title: "Attention to detail",
  },
  {
    title: "Transparent pricing",
  },
  {
    title: "Excellent customer service",
  },
  {
    title: "Innovative design solutions",
  },
  {
    title: "Professional project management",
  },
  {
    title: "Skilled and reliable contractors",
  },
  {
    title: "Respectful and courteous staff",
  }
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="shadow-sm">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              
              <HeadingIcon text={headingIconText.whyChooseUs__headingIconText}/>
              </div>

              <div>
                <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left">
                Why Choose Our Kitchen Renovation Specialist
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                Choose Fuzion Designs for your kitchen renovation specialist and discover the difference expertise and dedication can make in transforming your kitchen into a space of beauty and functionality.

                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-black text-lg md:text-xl font-bold">
              Usual Kitchen Renovation
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
                    <p className="text-sm 2xl:text-base 5xl:text-lg text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="title-bg2 text-center 2xl:py-[15px] py-[10px] text-black text-lg md:text-xl font-bold">
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
                    <p className="text-sm 2xl:text-base 5xl:text-lg text-black font-bold">
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