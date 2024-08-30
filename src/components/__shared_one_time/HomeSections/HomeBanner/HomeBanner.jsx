import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div>
            <div className='banner__bg h-[330px] md:h-[565px] 2xl:h-[500px] flex items-center justify-center'>
            <h1 className='text-center text-white text-[40px] md:text-[57px] font-semibold'>Dream Design <br className='block md:hidden'/> Build</h1>
            </div>
        </div>
    );
};

export default HomeBanner;