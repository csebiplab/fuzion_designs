import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./Company.css"

const Company = () => {
    return (
        <div className=''>
            <div className='container padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/deck_builder/Company.png" alt="Company image " width={770} height={650} className='w-[770px] h-[450px] md:h-[650px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.company__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">#1 Company for Deck Building Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs proudly holds the title of Toronto's premier company for deck building. Committed to excellence and creativity, we specialize in crafting bespoke outdoor living spaces that elevate your home's aesthetic and functionality. Our team of skilled professionals combines years of experience with a passion for design innovation, ensuring each deck we build is a masterpiece tailored to your unique preferences and lifestyle. From initial consultation to final installation, we prioritize clear communication and meticulous attention to detail, ensuring every aspect of your project exceeds expectations. Using only the highest quality materials and state-of-the-art construction techniques, we create decks that are visually stunning, durable, and built to withstand Toronto's diverse weather conditions. Whether you envision a cozy retreat or an expansive entertainment area, Fuzion Designs is dedicated to transforming your outdoor space into a sanctuary you'll love for years to come.</p>
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

export default Company;