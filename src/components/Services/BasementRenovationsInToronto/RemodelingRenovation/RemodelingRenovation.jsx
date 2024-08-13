import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const RemodelingRenovation = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.remodelingRenovation__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Basement Remodeling & Renovation Services Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs specializes in transforming basements into luxurious, functional spaces tailored to meet the unique needs and preferences of homeowners in Toronto. With a commitment to quality craftsmanship and innovative design, we offer comprehensive remodeling and renovation services that elevate your basement from bare concrete to a stunning extension of your home. Our expert team at Fuzion Designs understands that each basement presents its own sets of opportunities and challenges. Whether you envision a cozy entertainment area, a stylish home office, a spacious gym, or an inviting guest suite, we work closely with you to bring your ideas to life. At Fuzion Designs, we prioritize customer satisfaction and strive to exceed expectations on every project. Discover the potential within your basement with Fuzion Designs and transform it into a space that enhances your lifestyle and adds value to your home.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                            <Image src="/assets/basement_renovation/Remodeling & Renovation.png" alt="Remodeling & Renovation image" width={620} height={580} className='w-[620px] h-[580px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemodelingRenovation;