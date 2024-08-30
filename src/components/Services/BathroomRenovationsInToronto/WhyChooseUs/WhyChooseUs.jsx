"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import "./WhyChooseUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    title: "Budget overruns",
  },
  {
    title: "Delayed timelines",
  },
  {
    title: "Communication issues",
  },
  {
    title: "Subpar craftsmanship",
  },
  {
    title: "Difficulty in sourcing materials",
  },
  {
    title: "Limited design flexibility",
  },
  {
    title: "Disruptions to daily routine",
  },
  {
    title: "Unexpected structural issues",
  },
  {
    title: "Post-renovation cleanup required",
  },
  {
    title: "Warranty and service concerns",
  }
];
const easyPool = [
  {
    title: "Expert craftsmanship",
  },
  {
    title: "Customized designs",
  },
  {
    title: "High-quality materials",
  },
  {
    title: "Transparent communication",
  },
  {
    title: "Professional project management",
  },
  {
    title: "Customer satisfaction focus",
  },
  {
    title: "Competitive Pricing",
  },
  {
    title: "Timely completion",
  },
  {
    title: "Licensed and insured",
  },
  {
    title: "Attention to detail",
  }
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              
              <HeadingIcon text={headingIconText.whyChooseUs__headingIconText}/>
              </div>

              <div>
                <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left">
                Why Choose Us for Your Bathroom Renovations
                </h3>
              </div>

              <div>
                <p className="text-lg font-normal md:text-start text-center py-[10px]">
                By choosing Fuzion Designs, you're choosing a trusted partner committed to delivering excellence in bathroom renovations, enhancing your home with a beautifully designed and functional space tailored to your needs.

                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center 2xl:py-[15px] py-[10px] text-black text-lg md:text-xl font-bold">
              Usual Renovators
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
                    <p className="text-base 5xl:text-lg text-black font-bold">
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
                    <p className="text-base 5xl:text-lg text-black font-bold">
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