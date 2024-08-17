import React from 'react';
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const AboutUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-[36px]">
                    <div className="md:col-span-3">
                        <div>
                            <div className="flex justify-center md:justify-start">
                            <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                            </div>
                            
                            <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-left pb-[10px]">About Our Deck Contractors</h3>
                            <p className="text-black text-lg font-normal text-center md:text-left">At Fuzion Designs, our deck contractors are at the forefront of crafting exceptional outdoor living spaces in Toronto. With a passion for innovation and a commitment to quality, our team excels in designing and constructing custom decks that enhance the beauty and functionality of your home. At our company, we pride ourselves on our meticulous attention to detail and personalized approach to each project. From initial concept to final installation, we collaborate closely with our clients to understand their vision and deliver results that exceed expectations. Our skilled craftsmen utilize premium materials and cutting-edge techniques to ensure durability and aesthetic appeal, creating decks that are not only stunning but also built to withstand the elements and provide long-lasting enjoyment. Whether you want to revitalize your backyard with a stylish new deck or transform your outdoor space into a tranquil retreat, Fuzion Designs is dedicated to bringing your dreams to life.</p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
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