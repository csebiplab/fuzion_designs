import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const Cost = () => {
    return (
        <div>
            <div className='full__section_r_p padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.cost__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Cost to Build a Deck Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">At Fuzion Designs in Toronto, we provide transparent pricing and personalized estimates tailored to your specific deck-building needs. Our cost to build a deck considers factors such as size, materials, complexity of design, and any additional features you desire. We understand the importance of budgeting and aim to offer competitive rates without compromising on quality or craftsmanship. Whether you're looking to create a small, intimate deck or a sprawling outdoor entertainment area, our team works closely with you to outline all costs upfront and ensure there are no surprises along the way. With years of experience in the industry, we leverage our expertise to recommend cost-effective solutions that align with your vision and financial goals. From initial consultation to final installation, we prioritize clear communication and exceptional service, ensuring your deck-building experience with Fuzion Designs is both enjoyable and stress-free.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                            <Image src="/assets/deck_builder/cost.png" alt="Cost image" width={670} height={465} className="w-[670px] h-[465px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cost;