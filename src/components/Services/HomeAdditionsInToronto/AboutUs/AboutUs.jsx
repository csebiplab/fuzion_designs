import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const AboutUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">About Our Company in Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Located in the heart of Toronto, our company specializes in delivering exceptional home additions tailored to enhance your living experience. With a commitment to quality craftsmanship and innovative design, we transform spaces to meet your unique lifestyle needs. Whether you're looking to expand your kitchen, add extra bedrooms, or create a cozy home office, our experienced professionals ensure a seamless process from concept to completion. Our contractors prioritize customer satisfaction and strive to exceed expectations with every project. Trust us to bring creativity, reliability, and expertise to your home renovation journey in Toronto, making your vision a reality with precision and care.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                            <Image src="/assets/fuzion_design_home/about_us.png" alt="About Us image" width={620} height={480}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;