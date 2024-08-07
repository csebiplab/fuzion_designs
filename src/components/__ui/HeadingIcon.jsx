import Image from 'next/image';
import React from 'react';

const HeadingIcon = ({text="empty text"}) => {
    return (
        <div className='flex gap-2 items-center'>
            <Image src="/assets/icon/heading_icon.png" width={31} height={18} alt='heading icon'/>
            <p className="text-base">{text}</p>
        </div>
    );
};

export default HeadingIcon;