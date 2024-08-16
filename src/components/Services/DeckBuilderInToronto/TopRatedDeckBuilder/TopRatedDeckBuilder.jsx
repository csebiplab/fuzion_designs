import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./TopRatedDeckBuilder.css"

const TopRatedDeckBuilder = () => {
    return (
        <div className=''>
            <div className='full__section_r_p padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/deck_builder/Top Rated Deck Builder.png" alt="Top Rated Deck Builder image " width={770} height={620} className='w-[770px] h-[620px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.topRatedDeckBuilder__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Top Rated Deck Builder & Design Partner Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs is Toronto's top-rated deck builder and design partner, recognized for our commitment to excellence and innovation in outdoor living spaces. We specialize in creating bespoke decks that harmonize functionality with aesthetic appeal, tailored to enhance your home and lifestyle. Focusing on quality craftsmanship and premium materials, we ensure each project reflects our dedication to durability and design integrity. Our team collaborates closely with clients to understand their vision and preferences, offering expert guidance from initial concept to completion. Whether you envision a modern, minimalist deck or a rustic retreat, Fuzion Designs leverages years of experience and creative flair to deliver outstanding results. We pride ourselves on exceeding expectations by delivering on time, within budget, and with meticulous attention to detail.</p>
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

export default TopRatedDeckBuilder;