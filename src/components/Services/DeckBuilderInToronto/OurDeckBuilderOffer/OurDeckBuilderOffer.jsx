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

import img1 from "../../../../../public/assets/deck_builder/odbo1.png";
import img2 from "../../../../../public/assets/deck_builder/odbo2.png";
import img3 from "../../../../../public/assets/deck_builder/odbo3.png";
import img4 from "../../../../../public/assets/deck_builder/odbo4.png";
import img5 from "../../../../../public/assets/deck_builder/odbo5.png";
import img6 from "../../../../../public/assets/deck_builder/odbo6.png";
import img7 from "../../../../../public/assets/deck_builder/odbo7.png";
import img8 from "../../../../../public/assets/deck_builder/odbo8.png";
import img9 from "../../../../../public/assets/deck_builder/odbo9.png";
import img10 from "../../../../../public/assets/deck_builder/odbo10.png";

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
    desc: "Classic and timeless, our wood decks provide natural beauty and warmth, perfect for enhancing outdoor space. We use high-quality timber for durability and aesthetics.",
    title: "Wood Decks",
    img: img1,
  },
  {
    desc: "Known for their rich color and natural resistance to decay, cedar decks are an excellent choice for those seeking elegance and longevity. We ensure expert installation to highlight its unique Feat.",
    title: "Cedar Decks",
    img: img2,
  },
  {
    desc: "Classic and timeless, our wood decks provide natural beauty and warmth, perfect for enhancing outdoor space. We use high-quality timber for durability and aesthetics.",
    title: "Composite Decks",
    img: img3,
  },
  {
    desc: "Ideal for a clean and modern look, vinyl decks are resistant to fading and weathering. They provide a low-maintenance solution that offers functionality and style for your outdoor.",
    title: "Vinyl Decks",
    img: img4,
  },
  {
    desc: "Renowned for its exceptional hardness and durability, IPE decks provide a luxurious finish and outstanding longevity. This premium hardwood is perfect for creating a stunning outdoor",
    title: "IPE Decks",
    img: img5,
  },
  {
    desc: "We create unique deck designs that perfectly complement your home and lifestyle, ensuring functionality and aesthetic appeal.",
    title: "Custom Deck Design",
    img: img6,
  },
  {
    desc: "Our skilled team provides seamless installation of decks using premium materials, guaranteeing a durable and beautiful outdoor space.",
    title: "Deck Installation",
    img: img7,
  },
  {
    desc: "We specialize in restoring worn or damaged decks, revitalizing their appearance, and extending their lifespan through expert repairs.",
    title: "Deck Repair & Restoration",
    img: img8,
  },
  {
    desc: "Enhance your outdoor experience with beautifully designed patios, pergolas, and other living spaces that bring comfort and style to your yard.",
    title: "Outdoor Living Spaces",
    img: img9,
  },
  {
    desc: "We offer tailored deck solutions for commercial properties, ensuring safety and functionality while enhancing the overall environment.",
    title: "Commercial Deck Solutions",
    img: img10,
  },
];

const OurDeckBuilderOffer = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center pb-[15px] lg:pb-[25px]">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon text={headingIconText.ourDeckBuilderOffer__headingIconText}/>
            </div>
            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pt-[6px]">
            Services Our Deck Builders Offer
            </h3>
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

export default OurDeckBuilderOffer;
