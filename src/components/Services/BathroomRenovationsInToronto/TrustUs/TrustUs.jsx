import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const TrustUs = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.trustUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Trusted Bathroom Renovation Contractors Toronto</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">Fuzion Designs stands as the trusted choice among bathroom renovation contractors in Toronto, renowned for our commitment to excellence, innovation, and customer satisfaction. With years of experience and a passion for transforming spaces, we specialize in creating bespoke bathrooms that harmonize beauty with functionality. Our approach begins with a personalized consultation to understand your unique preferences and requirements. Whether you envision a contemporary spa-like retreat or a timeless traditional oasis, our skilled team of contractors and designers collaborates closely with you to bring your vision to life. We prioritize quality craftsmanship and attention to detail, ensuring every aspect of your renovation project meets the highest standards. At Fuzion Designs, transparency and clear communication are foundational to our process. From initial concept development and detailed planning to expert installation and finishing touches, we strive to exceed your expectations at every stage.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                            <Image src="/assets/bathroom_renovation/Trust Us.png" alt="Trust Us image" width={768} height={542} className="w-[768px] h-[233px] md:h-[542px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;