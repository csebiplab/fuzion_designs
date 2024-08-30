import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const KitchenRenovationWithUs = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.kitchenRenovationWithUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Start Your Toronto Kitchen Renovation With Us</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Begin your Toronto kitchen renovation journey with Fuzion Designs, where we blend expertise with creativity to transform your culinary space into a masterpiece. Our dedicated team starts by understanding your vision, needs, and budget, ensuring a personalized approach from concept to completion. With years of experience and a commitment to client satisfaction, our company stands as your trusted partner in enhancing your home. Whether you're seeking a modern makeover, a timeless classic, or a blend of styles, we deliver exceptional results that enhance the beauty and functionality of your kitchen. Choose our company for your Toronto kitchen renovation and embark on a seamless journey to a space that inspires and delights every day.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                        <Image src="/assets/kitchen_renovation/Kitchen Renovation With Us.png" alt="kitchen renovation with us image" width={770} height={437} className='w-[770px] h-[235px] md:h-[437px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KitchenRenovationWithUs;