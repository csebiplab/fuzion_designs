import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const ExpertRenovators = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.expertRenovators__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Expert Bathroom Renovators Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs stands at the forefront of expert bathroom renovations in Toronto and is renowned for our commitment to transforming your space into a luxurious and functional retreat. With years of experience and a passion for innovative design, we specialize in crafting bespoke bathrooms that blend aesthetic appeal with practicality. As expert bathroom renovators, we take pride in our meticulous attention to detail and dedication to quality craftsmanship. From concept development to completion, our team collaborates closely with clients to understand their unique preferences and requirements. Whether you envision a modern spa-like sanctuary or a timeless traditional design, we have the expertise to bring your vision to life. Our process is characterized by professionalism, transparency, and a focus on exceeding expectations. We utilize high-quality materials and employ skilled tradespeople to ensure every aspect of your bathroom renovation is executed flawlessly.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                            <Image src="/assets/bathroom_renovation/Expert Renovators.png" alt="Expert Renovators" width={620} height={580} className="w-[620px] h-[311px] md:h-[580px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertRenovators;