import React from 'react';
import Image from 'next/image';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const TrustUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:order-1 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.trustUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">Professional Deck Builders, You Can Trust</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">At Fuzion Designs, we are the professional deck builders in Toronto that you can trust to transform your outdoor space into a masterpiece. With years of expertise and a passion for quality craftsmanship, we specialize in creating custom decks that elevate the beauty and functionality of your home. Our team of deck builders is dedicated to delivering exceptional results, from initial consultation to final installation. We work closely with each client to understand their vision and preferences, ensuring every detail is meticulously planned and executed. Using only the highest quality materials and innovative design techniques, we craft durable and stunning decks tailored to your specific needs. Whether you desire a modern oasis or a traditional gathering space, Fuzion Designs combines creativity with precision to exceed your expectations.</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-3">
                        <div>
                            <Image src="/assets/deck_builder/Trust Us.png" alt="Trust Us image" width={620} height={512} className="w-[620px] h-[311px] md:h-[512px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;