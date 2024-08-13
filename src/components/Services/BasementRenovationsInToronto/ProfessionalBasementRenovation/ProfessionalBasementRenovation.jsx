import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./ProfessionalBasementRenovation.css"

const ProfessionalBasementRenovation = () => {
    return (
        <div className=''>
            <div className='container padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/basement_renovation/Professional Basement Renovation.png" alt="Professional Basement Renovation image " width={780} height={600} className='w-[780px] h-[600px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.professionalBasementRenovation__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Professional Basement Renovation Contractors Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs stands out as Toronto's premier professional basement renovation contractor, specializing in delivering top-quality transformations tailored to your needs. With a wealth of expertise and a commitment to excellence, we turn ordinary basements into extraordinary spaces that enhance the functionality and value of your home. At Fuzion Designs, we understand that every basement renovation project is unique. Whether you dream of a cozy family entertainment area, a sleek home office, a stylish gym, or a welcoming guest suite, our skilled team is dedicated to bringing your vision to life. From the initial design concept to the final finishing touches, our basement renovation contractors meticulously manage every aspect of your renovation with precision and care. We take pride in using only the finest materials and employing skilled craftsmen who uphold our high standards of workmanship.</p>
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

export default ProfessionalBasementRenovation;