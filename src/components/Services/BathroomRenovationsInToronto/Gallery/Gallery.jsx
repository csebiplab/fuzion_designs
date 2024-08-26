"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const galImgs = [
  "/assets/bathroom_renovation/gallery1.png",
  "/assets/bathroom_renovation/gallery2.png",
  "/assets/bathroom_renovation/gallery3.png",
  "/assets/bathroom_renovation/gallery4.png",
  "/assets/bathroom_renovation/gallery5.png",
  "/assets/bathroom_renovation/gallery6.png",
  "/assets/bathroom_renovation/gallery7.png",
  "/assets/bathroom_renovation/gallery8.png",
  
];

const galImgs2 = [
  "/assets/bathroom_renovation/gallery9.png",
  "/assets/bathroom_renovation/gallery10.png",
  "/assets/bathroom_renovation/gallery11.png",
  "/assets/bathroom_renovation/gallery12.png",
  "/assets/bathroom_renovation/gallery13.png",
  "/assets/bathroom_renovation/gallery14.png",
  "/assets/bathroom_renovation/gallery15.png",
  "/assets/bathroom_renovation/gallery16.png",
];

const Gallery = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <div className="bg_vinylPool">
      <div className="custom-container padding__top">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <HeadingIcon text={headingIconText.gallery__headingIconText}/>
            <div className="">
              <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center pb-[25px]">
              Gallery of Our Past Projects
              </h3>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs
                .slice(0, showAll ? galImgs.length : 4)
                .map((imgUrl, idx) => (
                  <div key={idx} className="m-2 px-6">
                    <Image
                      width={370}
                      height={250}
                      src={imgUrl}
                      alt="gallery"
                      className="object-contain w-full h-auto mx-auto"
                    />
                  </div>
                ))}
            </div>
            {!showAll && (
              <div className="flex justify-center text-center mt-4 px-10">
                <button
                  onClick={handleLoadMore}
                  className="w-2/3 text-lg font-bold px-4 py-2 bg-[#0170B9] text-white rounded-[8px]"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                reverseDirection: true,
                stopOnLastSlide: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs.map((imgUrl, idx) => (
                <SwiperSlide key={idx} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs2.map((imgUrl, i) => (
                <SwiperSlide key={i} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
