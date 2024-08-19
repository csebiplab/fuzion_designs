import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const BestKitchenRenovation = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.bestKitchenRenovation__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Best Kitchen Renovation Company Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs stands out as the premier kitchen renovation company in Toronto, celebrated for our commitment to excellence and personalized service. With a focus on innovation and quality craftsmanship, we specialize in transforming kitchens into stylish, functional spaces that exceed expectations. Our approach begins with understanding your vision and needs, followed by meticulous planning and design. Whether you desire a contemporary kitchen with sleek finishes or a traditional space infused with warmth, our team of skilled professionals ensures every detail is executed flawlessly. At our company, we prioritize client satisfaction, transparency, and communication throughout the entire renovation process. From initial consultation to final installation, we work diligently to deliver superior results that enhance your home's value and appeal.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div>
                        <Image src="/assets/kitchen_renovation/Best Kitchen Renovation.png" alt="best kitchen renovation image" width={620} height={545} className='w-[620px] h-[545px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestKitchenRenovation;