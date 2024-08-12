import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const AboutUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-[36px]">
                    <div className="md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">About Our Custom Designs & Basement Renovators</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">At Fuzion Designs, we pride ourselves on our expertise in crafting custom designs and executing exceptional basement renovations in Toronto. With a dedicated team of skilled renovators and designers, we cater to clients seeking personalized solutions that enhance their homes' aesthetic appeal and functionality. Our approach begins with a thorough consultation where we listen to your ideas, preferences, and requirements. Throughout the renovation process, we prioritize quality craftsmanship and attention to detail. Every aspect of our work is meticulously executed from structural modifications to finishing touches to ensure superior results and client satisfaction. We use high-quality materials and innovative techniques to create durable, stylish, and comfortable living spaces that stand the test of time. With years of experience in the industry, Fuzion Designs has built a reputation for excellence in Toronto and beyond.</p>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <div>
                            <Image src="/assets/fuzion_design_home/about_us.png" alt="About Us image" width={600} height={600} className='w-[500px] h-[460px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;