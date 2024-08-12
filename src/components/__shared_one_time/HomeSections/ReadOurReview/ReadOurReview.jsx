import Image from 'next/image';
import React from 'react';

const ReadOurReview = () => {
    return (
        <div>
            <div>
                <h3 className="text-center text-[42px] text-black font-semibold pt-[30px] pb-[40px]">Read Our Reviews</h3>
                <div>
                    <Image src="/assets/fuzion_design_home/ready_our_review.png" alt='ready_our_review image' width={540} height={480} className="w-[540px] h-[480px] ml-3 md:mx-auto pb-[30px] md:pb-[50px]"/>
                </div>
            </div>
        </div>
    );
};

export default ReadOurReview;