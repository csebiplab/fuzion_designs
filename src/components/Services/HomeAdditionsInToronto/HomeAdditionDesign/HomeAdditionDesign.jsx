import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./HomeAdditionDesign.css"

const HomeAdditionDesign = () => {
    return (
        <div className=''>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/fuzion_design_home/Home Addition Design.png" alt="Home Addition Design image " width={770} height={520} className='w-[770px] h-[292px] md:h-[520px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.homeAdditionDesign__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Best Home Addition Design in Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs in Toronto excels in crafting the best home addition designs, blending creativity with practicality. Our expert team meticulously tailors each project to enhance your home's functionality and aesthetic appeal. Whether you seek a luxurious new bathroom, expanded kitchen, or additional living space, we prioritize innovative design solutions and superior craftsmanship. With a focus on client collaboration, we ensure your vision is realized while adhering to timelines and budgets. Trust Fuzion Designs to elevate your home with standout additions that seamlessly integrate with your existing structure, enhancing both value and livability. Discover why we're the preferred choice for homeowners seeking exceptional home additions in Toronto.</p>
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

export default HomeAdditionDesign;