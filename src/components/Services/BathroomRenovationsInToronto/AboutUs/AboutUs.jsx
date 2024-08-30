import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-[36px]">
                    <div className="order-2 md:col-span-4">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">About Our Design & General Contractor</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">As a design and <Link  href="https://en.wikipedia.org/wiki/General_contractor" target='_blank' rel='nofollow' className="hover:underline text-primary">general contractor</Link>  in Toronto, we specialize in creating bespoke residential and commercial interiors. Our process begins with deeply understanding your needs and desires, ensuring every detail reflects your style and functionality requirements. Whether it's a bathroom renovation, kitchen remodel, or complete home transformation, we handle each project with dedication and precision. Our commitment to quality craftsmanship and attention to detail sets our renovators apart. From initial concept to final execution, we prioritize open communication and collaboration to exceed expectations. Our goal is not just to meet your specifications but to enhance your living or working environment with innovative designs and superior construction techniques. With Fuzion Designs, you can expect a seamless journey from concept development through construction to the final reveal. Let us turn your ideas into reality and create spaces that inspire and delight, reflecting our dedication to excellence in every project we undertake.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                        <iframe
                        src="https://HomeStars.com/widgets/reviews/fuzion-designs/large"
                        width="370"
                        height="500px"
                        frameborder="0"
                        scrolling="yes"
                        className="w-[370px] md:w-[430px] 2xl:w-[500px] h-[510px]"
                        >
                        Your browser does not support iframes.&nbsp;
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;