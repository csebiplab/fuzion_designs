import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const AboutUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="order-2 md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">About Our Remodeling & Design Company</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">At Fuzion Designs, we're dedicated to transforming your vision into reality through innovative remodeling and design solutions in Toronto. Specializing in both residential and commercial projects, we offer comprehensive services that span from initial concept development to final construction. Our approach combines creativity, craftsmanship, and attention to detail to deliver spaces that inspire. Whether you're renovating a kitchen, remodeling a bathroom, or planning a complete home makeover, we prioritize client collaboration to ensure every project reflects your unique style and functional needs. Backed by years of industry experience, our team of skilled professionals is committed to excellence and client satisfaction. We handle all aspects of the remodeling process with precision, from architectural planning and interior design to material selection and construction management.</p>
                        </div>
                    </div>
                    <div className="order-1 md:col-span-3">
                        <div>
                        <iframe
                        src="https://HomeStars.com/widgets/reviews/fuzion-designs/large"
                        width="430"
                        height="500px"
                        frameborder="0"
                        scrolling="yes"
                        className="w-[430px] md:w-[490px] h-[500px]"
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