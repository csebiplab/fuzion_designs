import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const ExpertBuilders = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.expertBuilders__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Expert Home Addition Builders
                            in Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs is the foremost choice for expert home addition builders in Toronto. With a commitment to craftsmanship and client satisfaction, we specialize in creating seamless extensions that integrate flawlessly with your existing home. Our team of experienced professionals ensures each project is meticulously planned and executed to enhance your living space. Whether you're adding a new bedroom, expanding your kitchen, or creating a custom space, we deliver innovative design solutions and superior construction quality. Trust Fuzion Designs to transform your vision into reality with precision, creativity, and a dedication to exceeding your expectations. Discover why we're recognized as Toronto's leading experts in home additions.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                            <Image src="/assets/fuzion_design_home/Expert Builders.png" alt="Expert Builders image" width={934} height={510}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertBuilders;