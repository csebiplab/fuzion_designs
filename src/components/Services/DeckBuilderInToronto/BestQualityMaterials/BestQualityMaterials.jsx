import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const BestQualityMaterials = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.bastQualityMaterials__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Best Quality Deck Building Materials</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">At Fuzion Designs, we pride ourselves on offering the best quality deck-building materials available in Toronto. We understand that the foundation of a durable and beautiful deck lies in the materials used. That's why we source only the finest lumber, composite materials, and accessories to ensure longevity, aesthetic appeal, and minimal maintenance for our clients. Whether you prefer the natural warmth of wood or the modern durability of composite decking, we provide a wide range of options to suit your style and budget. Our expert team guides you through the selection process, offering insights into the benefits of each material and recommending the best fit for your specific project. By prioritizing quality materials and craftsmanship, we guarantee that every deck we build not only meets but exceeds industry standards for durability and aesthetics.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div>
                            <Image src="/assets/deck_builder/Best Quality Materials.png" alt="Best Quality Materials image" width={620} height={545} className="w-[620px] h-[545px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestQualityMaterials;