import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const HowMuchCost = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.howMuchCost__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">How Much Basement Renovation Cost Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Determining the cost of a basement renovation in Toronto is influenced by several factors, including the size of the space, the scope of work, and the desired level of finishes. On average, basic basement renovations in Toronto typically start around <b>$30,000</b> to <b>$40,000</b> for essential upgrades like insulation, drywall, and basic flooring. For more comprehensive projects including custom designs, upgraded materials such as hardwood floors or stone countertops, and specialized features like home theaters or wet bars, costs can range from <b>$50,000</b> to <b>$100,000</b> or more. Our team at Fuzion Designs strives to deliver transparent pricing and detailed proposals tailored to your needs. We prioritize quality craftsmanship and use high-quality materials to ensure longevity and value. Throughout the renovation process, we maintain clear communication and project management to keep costs controlled and timelines on track.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div>
                            <Image src="/assets/basement_renovation/How Much Cost.png" alt="How Much Cost image" width={620} height={580} className='w-[620px] h-[580px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowMuchCost;