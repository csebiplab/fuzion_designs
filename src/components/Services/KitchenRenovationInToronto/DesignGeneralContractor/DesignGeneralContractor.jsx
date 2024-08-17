import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const DesignGeneralContractor = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.designGeneralContractor__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Exterior Design & General Contractor Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs is your premier exterior design and general contractor in Toronto, specializing in enhancing outdoor spaces with creativity and expertise. From concept to completion, we offer comprehensive services tailored to your residential or commercial needs. Our skilled professionals collaborate closely with clients to understand their vision and functional requirements. Whether you're looking to renovate your outdoor living area, upgrade your facade, or enhance curb appeal, our company delivers innovative solutions that elevate your property's aesthetic and value. As a trusted general contractor, we manage all aspects of your project with meticulous planning and superior craftsmanship. We prioritize using quality materials and sustainable practices to ensure lasting results that withstand the elements and enhance your outdoor experience.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                        <Image src="/assets/kitchen_renovation/DesignGeneralContractor.png" alt="DesignGeneralContractor image" width={620} height={545}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignGeneralContractor;