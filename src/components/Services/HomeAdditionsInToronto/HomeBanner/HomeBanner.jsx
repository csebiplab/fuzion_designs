"use client";
import Image from "next/image";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <>
      <div className="hero-section full__section_l_p">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-tight xl:leading-snug 5xl:leading-normal text-[55px] md:text-[58px] lg:text-[61px] xl:text-[64px] 2xl:text-[67px] 3xl:text-[70px] 4xl:text-[72px] 5xl:text-[75px] font-normal text-left text-[#0C1C3C">
                Home Additions in Toronto
              </h1>
              <p className="text-[20px] lg:text-[25px] font-normal mb-4 leading-tight  xl:leading-snug 5xl:leading-normal mt-2 text-[#0C1C3C] pb-[15px] xl:pb-[20px] 5xl:pb-[40px]">
                Fuzion Designs specializes in seamless home additions in
                Toronto, blending innovation with quality craftsmanship for your
                living space needs.
              </p>
              <a href="tel:+1 416-571-0011">
                <button className="flex gap-2 hero_btn items-center text-lg font-bold text-white py-[8px] px-[19px]">
                  Estimate{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9L20 9V7L0 7L0 9Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="hero-right relative hidden md:block">
            <Image
              width={928}
              height={782}
              src="/assets/fuzion_design_home/hero_bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
