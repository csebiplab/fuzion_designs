import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const RenovationsFinishing = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.renovationsFinishing__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Basement Renovations & Finishing Experts Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs is your premier choice for expert basement renovations and finishing in Toronto. With years of experience and a passion for transforming spaces, we specialize in turning unfinished basements into functional, stylish, and inviting areas that complement your lifestyle. Our dedicated team at Fuzion Designs understands the importance of maximizing the potential of your basement. From initial consultation to final touches, we prioritize craftsmanship and attention to detail in every project. We utilize high-quality materials and employ skilled tradespeople to ensure superior results that enhance the value and enjoyment of your home. At Fuzion Designs, we are committed to delivering exceptional customer service and strive for complete satisfaction with every renovation. Let us transform your basement into a functional and beautiful part of your home with our expertise and dedication to excellence in design and construction.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                            <Image src="/assets/basement_renovation/Renovations & Finishing.png" alt="Renovations & Finishing image" width={770} height={510} className='w-[770px] h-[510px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RenovationsFinishing;