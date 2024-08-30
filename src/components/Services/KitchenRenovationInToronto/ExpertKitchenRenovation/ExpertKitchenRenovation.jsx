import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const ExpertKitchenRenovation = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.expertKitchenRenovation__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Expert Kitchen Renovation Contractors Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs stands as the premier choice for expert kitchen renovation contractors in Toronto, renowned for our dedication to craftsmanship and client satisfaction. With a focus on innovative design and meticulous attention to detail, we specialize in transforming kitchens into stunning, functional spaces. Our team of skilled professionals collaborates closely with each client to understand their unique vision and requirements. From conceptualization to completion, we prioritize quality materials, superior workmanship, and timely project delivery. Whether you're seeking a modern kitchen makeover, traditional elegance, or a personalized style blend, Fuzion Designs offers tailored solutions to exceed your expectations. As your trusted kitchen renovation contractor, we ensure transparent communication, thorough planning, and seamless execution. We handle all aspects of the renovation process with efficiency and care, providing a stress-free experience for our clients.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                        <Image src="/assets/kitchen_renovation/Expert Kitchen Renovation.png" alt="expert kitchen renovation image" width={770} height={545} className='w-[770px] h-[235px] md:h-[545px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertKitchenRenovation;