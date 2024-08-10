import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div>
            <div className='banner__bg py-[220px] md:py-[300px] lg:py-[345px] xl:py-[390px] 2xl:py-[435px] 3xl:py-[485px] 4xl:py-[525px] 5xl:py-[565px]'>
                <h1 className='text-center text-white text-[57px] font-semibold'>Dream Design Build</h1>
            </div>
        </div>
    );
};

export default HomeBanner;