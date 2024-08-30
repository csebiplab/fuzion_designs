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

import img1 from "../../../../../public/assets/bathroom_renovation/wp1.png";
import img2 from "../../../../../public/assets/bathroom_renovation/wp2.png";
import img3 from "../../../../../public/assets/bathroom_renovation/wp3.png";
import img4 from "../../../../../public/assets/bathroom_renovation/wp4.png";
import img5 from "../../../../../public/assets/bathroom_renovation/wp5.png";
import img6 from "../../../../../public/assets/bathroom_renovation/wp6.png";
import img7 from "../../../../../public/assets/bathroom_renovation/wp7.png";
import img8 from "../../../../../public/assets/bathroom_renovation/wp8.png";

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
    desc: "We start by meeting with you to discuss your ideas, preferences, and budget for the renovation. This helps us understand your vision and requirements.",
    title: "Initial Consultation",
    img: img1,
  },
  {
    desc: "Our experienced team develops a detailed design plan tailored to your needs. This includes layout considerations, material selections, and fixture choices to achieve your desired look and functionality.",
    title: "Design and Planning",
    img: img2,
  },
  {
    desc: "We provide a clear proposal outlining the scope of work, timeline, and cost estimates. Once agreed upon, we proceed with obtaining the necessary permits and approvals.",
    title: "Proposal and Agreement",
    img: img3,
  },
  {
    desc: "Our skilled contractors carefully prepare the space, ensuring proper removal of existing fixtures and structures while minimizing disruption to your home.",
    title: "Demolition and Preparation",
    img: img4,
  },
  {
    desc: "We manage all aspects of the renovation, including plumbing, electrical work, carpentry, and installation of new fixtures and finishes. Our team works efficiently and with attention to detail",
    title: "Installation and Construction",
    img: img5,
  },
  {
    desc: "We meticulously complete the project with finishing touches, such as painting, sealing, and installing accessories.",
    title: "Finishing Touches",
    img: img6,
  },
  {
    desc: "Before completing the project, we conduct a thorough inspection to ensure everything meets the agreed-upon specifications. We then hand over the renovated bathroom to you",
    title: "Final Inspection and Handover",
    img: img7,
  },
  {
    desc: "We follow up with you to ensure your satisfaction with the completed renovation. Our goal is to exceed your expectations and provide a bathroom that enhances your home's value & your quality",
    title: "Follow-up and Satisfaction",
    img: img8,
  }
];

const WorkingProcess = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.workingProcess__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pt-[6px]">
            Working Process of Our Bathroom Renovations
            </h3>
            <p className="text-lg font-normal text-black text-center pt-[10px]">At Fuzion Designs, our bathroom renovation process is designed to deliver exceptional results with a seamless and efficient experience for our clients in Toronto. Here's how we work:</p>
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

export default WorkingProcess;
