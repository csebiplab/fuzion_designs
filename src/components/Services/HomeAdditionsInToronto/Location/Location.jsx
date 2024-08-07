import React from 'react';

const Location = () => {
    return (
        <div className="container py-[25px] md:py-[30px] lg:py-[35px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[50px] 4xl:py-[52px] 5xl:py-[55px]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d5773.676367128344!2d-79.6513917!3d43.6515349!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d43.6515892!2d-79.65066209999999!4m5!1s0x882b3f10858ca355%3A0x6f2cbc09511b69f7!2sFuzion%20Designs%201300%20Britannia%20Rd%20E%20Mississauga%2C%20ON%20L4W%201C8!3m2!1d43.6515349!2d-79.65139169999999!5e0!3m2!1sen!2sbd!4v1723051268978!5m2!1sen!2sbd" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Location;
