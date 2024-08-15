
import React from 'react';

const ReadOurReview = () => {
    return (
        <div>
            <div>
                <h3 className="text-center text-[42px] text-black font-semibold pt-[30px] pb-[40px]">Read Our Reviews</h3>
                <div className="pb-[20px]">
                    <iframe
                        src="https://HomeStars.com/widgets/reviews/fuzion-designs/large"
                        width="430"
                        height="500px"
                        frameborder="0"
                        scrolling="yes"
                        className="w-[430px] md:w-[490px] h-[500px] mx-auto"
                        >
                        Your browser does not support iframes.&nbsp;
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ReadOurReview;