import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./AffordableCompany.css"

const AffordableCompany = () => {
    return (
        <div className=''>
            <div className='container padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/kitchen_renovation/Affordable Company.png" alt="Affordable Company image " width={770} height={650} className='w-[770px] h-[650px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.affordableCompany__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Affordable Kitchen Renovations Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs offers affordable kitchen renovations in Toronto without compromising on quality or style. We understand the importance of maximizing your budget while delivering exceptional results that enhance your home. Our approach begins with a detailed consultation to understand your vision and budget constraints. We provide transparent pricing and realistic timelines, ensuring there are no surprises along the way. Whether you're looking to update cabinetry, replace countertops, or redesign the entire layout, we offer creative solutions tailored to your needs. With our company, you can expect efficient project management and skilled craftsmanship from start to finish. We prioritize using cost-effective materials without sacrificing durability or aesthetics. Our goal is to transform your kitchen into a space that reflects your taste and enhances functionality, all within a budget-friendly framework.</p>
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

export default AffordableCompany;