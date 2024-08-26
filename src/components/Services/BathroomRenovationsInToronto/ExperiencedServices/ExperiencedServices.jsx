import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./ExperiencedServices.css"

const ExperiencedServices = () => {
    return (
        <div className=''>
            <div className='container padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='order-1 md:order-2 md:col-span-3'>
                    <div>
                        <Image src="/assets/bathroom_renovation/Experienced Services.png" alt="Experienced Services image " width={770} height={670} className='w-[770px] h-[670px]'/>
                    </div>
                </div>
                <div className='order-2 md:order-1 md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.experiencedServices__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Experienced Bathroom Renovation Services Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs offers unparalleled expertise in bathroom renovation services throughout Toronto, combining years of experience with a commitment to excellence in design and craftsmanship. Our dedicated team specializes in transforming ordinary bathrooms into extraordinary spaces that reflect your style and enhance your daily life. As experienced professionals, we understand the importance of a well-planned renovation. From the initial consultation to the final touches, we work closely with you to ensure every detail aligns with your vision and functional needs. We pride ourselves on using premium materials and employing skilled tradespeople to execute each project with precision and care. Our comprehensive services cover everything from layout redesign and fixture installation to custom cabinetry and luxurious finishes. Throughout the process, we prioritize open communication, transparency, and a commitment to delivering projects on time and within budget.</p>
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
                    <h5 className="text-[22px] md:text-[24px] font-semibold text-black pt-[30px]">or Consultation:<a href='tel:+1 416-571-0011'>  <span className='text-primary font-bold'>+1 416-571-0011</span></a></h5>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default ExperiencedServices;