import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const BasementUpgrade = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.basementUpgrade__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Upgrade Your Basement in Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Upgrade your basement with Fuzion Designs, Toronto's premier specialists in transforming underutilized spaces into stunning, functional areas that elevate your home's appeal. Whether you're seeking to create a cozy family retreat, a stylish entertainment zone, a practical home office, or a luxurious guest suite, our team is dedicated to turning your vision into reality. From initial consultation to final execution, we collaborate closely with you to ensure every detail exceeds your expectations. Our expertise extends to managing all aspects of the renovation process, including architectural planning, interior design, and construction, using only the finest materials and craftsmanship. Choose Fuzion Designs for your basement upgrade in Toronto and discover how we can transform your basement into a stylish and functional extension of your home, perfectly tailored to your lifestyle.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                            <Image src="/assets/basement_renovation/Basement Upgrade.png" alt="Basement Upgrade image" width={770} height={500} className='w-[770px] h-[500px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasementUpgrade;