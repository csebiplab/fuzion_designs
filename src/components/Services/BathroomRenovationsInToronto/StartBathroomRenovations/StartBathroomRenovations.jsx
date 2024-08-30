import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./StartBathroomRenovations.css"

const StartBathroomRenovations = () => {
    return (
        <div className=''>
            <div className='container padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/bathroom_renovation/Start Bathroom Renovations.png" alt="Start Bathroom Renovations image " width={620} height={500} className='w-[620px] h-[311px] md:h-[500px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.startBathroomRenovations__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Start Your Bathroom Renovations With Fuzion Designs</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Start your bathroom renovations with Fuzion Designs, Toronto's premier choice for transforming your space into a luxurious retreat. With meticulous attention to detail and a passion for innovative design, we specialize in creating personalized bathrooms that blend functionality with style. Trust our experienced team to deliver exceptional craftsmanship and outstanding results, tailored to your vision and budget. Let Fuzion Designs turn your dream bathroom into reality, enhancing your home with elegance and comfort.</p>
                    <div className='w-full flex flex-col items-center md:items-start'>
                    <a href='tel:+1 416-571-0011'>
                    <button className="flex items-center gap-3 readyToWorkBtn text-lg font-bold text-white py-[8px] px-[19px]">
                  Get Your Free Estimate{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                  >
                    <path
                      d="M20.7071 8.67683C21.0976 8.28631 21.0976 7.65314 20.7071 7.26262L14.3431 0.898659C13.9526 0.508134 13.3195 0.508134 12.9289 0.898659C12.5384 1.28918 12.5384 1.92235 12.9289 2.31287L18.5858 7.96973L12.9289 13.6266C12.5384 14.0171 12.5384 14.6503 12.9289 15.0408C13.3195 15.4313 13.9526 15.4313 14.3431 15.0408L20.7071 8.67683ZM0 8.96973L20 8.96973V6.96973L0 6.96973L0 8.96973Z"
                      fill="white"
                    />
                  </svg>
                </button>
                    </a>
                    <h5 className="text-[22px] md:text-[24px] font-semibold text-black pt-[30px]">or Call Us:<a href='tel:+1 416-571-0011'>  <span className='text-primary font-bold'>+1 416-571-0011</span></a></h5>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default StartBathroomRenovations;