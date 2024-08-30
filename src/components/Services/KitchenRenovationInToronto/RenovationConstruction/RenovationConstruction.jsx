import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const RenovationConstruction = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.renovationConstruction__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Renovation & Construction Company Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs is a premier renovation and construction company in Toronto, dedicated to transforming spaces with creativity and precision. Specializing in both residential and commercial projects, we offer comprehensive services that span from initial concept to final construction. Our team of experienced professionals excels in delivering tailored solutions that enhance functionality and aesthetics. Whether you're renovating a single room, remodeling an entire home, or undertaking a commercial project, Fuzion Designs prioritizes quality craftsmanship and client satisfaction. As your trusted renovation and construction partner, we handle all aspects of the project with meticulous attention to detail and superior project management. From architectural design and planning to interior finishes and exterior renovations, we ensure seamless execution and timely completion.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                        <Image src="/assets/kitchen_renovation/RenovationConstruction.png" alt="RenovationConstruction.png image" width={620} height={545} className="h-[310px] md:h-[545px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RenovationConstruction;