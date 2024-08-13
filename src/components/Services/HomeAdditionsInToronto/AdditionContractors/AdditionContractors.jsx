import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const AdditionContractors = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.additionContractors__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Start With Our Home Addition Contractors</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Begin your home addition journey with Fuzion Designs, where our expert contractors specialize in transforming your vision into reality. From initial consultation to final construction, we prioritize craftsmanship, innovation, and client satisfaction. Our team collaborates closely with you to design and build custom home additions that enhance both functionality and aesthetics. Whether you're expanding your kitchen, adding a new bedroom, or creating a personalized space, Fuzion Designs delivers exceptional service and attention to detail. Trust us to navigate the entire process, ensuring a seamless experience from concept to completion. Discover why homeowners in Toronto rely on Fuzion Designs for superior home addition solutions that elevate living spaces and exceed expectations.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                            <Image src="/assets/fuzion_design_home/Addition Contractors.png" alt="Addition Contractors image" width={620} height={510}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionContractors;