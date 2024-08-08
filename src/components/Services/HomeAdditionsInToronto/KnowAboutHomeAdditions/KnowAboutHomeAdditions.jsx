import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const KnowAboutHomeAdditions = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.knowAboutHomeAdditions__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">What is Home Additions</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Home additions refer to expanding or enlarging a residential property's existing structure. This typically involves constructing additional rooms or sections to increase living space and accommodate the changing needs or preferences of the homeowners. Home additions can include adding extra bedrooms, bathrooms, kitchens, living rooms, or even entire new floors to a house. The goal is to enhance the home's functionality, comfort, and value while often avoiding the need to relocate to a larger property. These projects require careful planning, and adherence to building codes and regulations, and often involve the expertise of architects, contractors, and designers to ensure structural integrity and aesthetic harmony with the existing home</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div>
                            <Image src="/assets/fuzion_design_home/Know About Home Additions.png" alt="Know About Home Additions image" width={934} height={560}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowAboutHomeAdditions;