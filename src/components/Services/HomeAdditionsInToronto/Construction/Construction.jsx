import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./Construction.css"

const Construction = () => {
    return (
        <div className=''>
            <div className='container padding__top'>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[50px]">
                <div className='md:col-span-3'>
                    <div>
                        <Image src="/assets/fuzion_design_home/Construction.png" alt="Construction image " width={770} height={620} className='w-[770px] h-[620px]'/>
                    </div>
                </div>
                <div className='md:col-span-3 flex flex-col items-center md:items-start justify-center'>
                    <div className='pb-[5px] '>
                        <HeadingIcon text={headingIconText.construction__headingIconText}/>
                    </div>

                    <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">#1 Construction Company in Toronto</h3>
                    <p className="text-black text-lg font-normal text-center md:text-left pb-[30px]">Fuzion Designs is Toronto's premier construction company, specializing in transforming homes with unparalleled craftsmanship and attention to detail. With a commitment to quality and innovation, we excel in custom home additions, renovations, and remodeling projects. Our team of skilled professionals is dedicated to exceeding client expectations by delivering personalized service and creating spaces that inspire. Whether you're envisioning a modern kitchen upgrade, a luxurious bathroom remodel, or expanding your living area, our company combines creativity and expertise to bring your vision to life. Discover why we're trusted as the #1 choice for construction in Toronto and let us elevate your home with our signature blend of design excellence and superior construction.</p>
                    <div className='w-full flex flex-col items-center md:items-start'>
                    <a href='tel:+1 (405) 586-4112'>
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

export default Construction;