import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./BasementRenovation.css"

const BasementRenovation = () => {
    return (
        <div className=''>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/basement_renovation/Basement Renovation.png" alt="Basement Renovation image " width={780} height={600} className='w-[780px] h-[235px] md:h-[600px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.basementRenovation__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Basement Renovation Design Build Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs is Toronto's premier design-build firm specializing in basement renovations that seamlessly blend innovative design with meticulous construction. Our approach at Fuzion Designs begins with a collaborative design process where we work closely with you to understand your vision, lifestyle needs, and aesthetic preferences. As a full-service design-build company, we handle every aspect of your basement renovation project from start to finish. We prioritize craftsmanship and attention to detail, utilizing high-quality materials and employing skilled tradespeople to achieve outstanding results. With Fuzion Designs, you can trust that your basement renovation in Toronto will be executed with professionalism, integrity, and a commitment to delivering a space that enhances your home's functionality and aesthetic appeal. Transform your basement into a standout feature of your home with Fuzion Designs' expertise and dedication to excellence.</p>
                    <div className='w-full flex flex-col items-center md:items-start'>
                    <a href='tel:+1 416-571-0011'>
                        <button className="readyToWorkBtn text-lg font-bold text-white py-[8px] px-[19px]">Get Your Free Estimate</button>
                    </a>
                    <h5 className="text-[22px] md:text-[24px] font-semibold text-black pt-[30px]">or Call Us:<a href='tel:+1 416-571-0011'>  <span className='text-primary font-bold'>+1 416-571-0011</span></a></h5>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default BasementRenovation;