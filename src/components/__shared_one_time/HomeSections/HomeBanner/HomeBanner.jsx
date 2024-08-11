import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div>
            <div className='banner__bg h-[60vh] md:h-[100vh] flex items-center justify-center'>
            <h1 className='text-center text-white text-[57px] font-semibold'>Dream Design Build</h1>
            </div>
        </div>
    );
};

export default HomeBanner;