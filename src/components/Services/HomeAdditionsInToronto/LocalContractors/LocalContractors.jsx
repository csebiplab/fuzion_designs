import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const LocalContractors = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.localContractors__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Local Contractors 
                            for Home Additions</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">For premier home additions in Toronto, Fuzion Designs stands out among local contractors. With a reputation for excellence, we specialize in transforming homes with innovative design and quality craftsmanship. Our dedicated team collaborates closely with clients to create personalized living spaces that enhance functionality and aesthetics. From initial consultation to completion, we prioritize transparency, communication, and exceeding expectations. Whether you're looking to add a new bedroom, expand your kitchen, or create a custom space, Fuzion Designs delivers exceptional service and attention to detail. Choose us for a seamless home addition experience that elevates your home's value and livability in Toronto.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div>
                            <Image src="/assets/fuzion_design_home/Local Contractors.png" alt="Local Contractors image" width={934} height={510}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalContractors;