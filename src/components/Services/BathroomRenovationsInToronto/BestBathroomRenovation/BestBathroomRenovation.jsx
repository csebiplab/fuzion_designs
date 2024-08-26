import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const BestBathroomRenovation = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.bestBathroomRenovation__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Best Bathroom Renovation Company Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs proudly stands as Toronto's premier choice for bathroom renovations, recognized for our dedication to delivering the best in design, craftsmanship, and customer satisfaction. With a focus on creating personalized spaces that elevate aesthetics and functionality, we specialize in transforming bathrooms into luxurious retreats tailored to your unique style preferences and practical needs. Our renovator's approach begins with a thorough consultation to understand your vision and requirements. We prioritize quality materials, innovative solutions, and meticulous attention to detail to ensure exceptional results that exceed expectations. At Fuzion Designs, we believe in transparency and clear communication throughout the renovation process. From initial concept development and detailed planning to seamless execution and timely completion, we are dedicated to providing a stress-free experience. Our commitment to excellence extends beyond aesthetics, focusing on durability, functionality, and sustainability in every project.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                            <Image src="/assets/bathroom_renovation/Best Bathroom Renovation.png" alt="Best Bathroom Renovation image" width={768} height={542} className="w-[768px] h-[542px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestBathroomRenovation;