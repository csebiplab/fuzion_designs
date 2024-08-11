import Image from 'next/image';
import React from 'react';

const AreYouReady = () => {
    return (
        <div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className="md:col-span-1  bg-[#2A2A2A] text-white py-[24px]">
                        <div className='full__section_l_p'>
                            <h3 className='font-black text-white text-[42px] text-center leading-snug'>Are you ready to build your dream?</h3>
                        </div>
                    </div>
                    <div className="md:col-span-1  bg-black pt-[53px] pb-[47px]">
                        <div className='full__section_r_p flex items-center justify-center gap-[45px]'>
                        <button className='border-4 border-primary hover:bg-[#ffb608] hover:text-white py-[12px] md:py-[14px] lg:py-[16px] xl:py-[18px] 3xl:py-[20px] 5xl:py-[23px] px-[20px] md:px-[35px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] 5xl:px-[58px] text-primary text-base xl:text-lg font-bold uppercase'>Get Estimate</button>
                        <button className='flex items-center gap-[5px] border-4 border-primary hover:bg-[#ffb608] hover:text-white py-[12px] md:py-[14px] lg:py-[16px] xl:py-[18px] 3xl:py-[20px] 5xl:py-[23px] px-[20px] md:px-[35px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] 5xl:px-[58px] text-primary text-base xl:text-lg font-bold uppercase'><Image src="/assets/icon/home_phone_icon.png" alt='phone icon' width={22} height={18} className='hover:filter hover:brightness-0 hover:invert'/> Call Us</button>
                        </div>
                    </div>
                </div>
                {/* second div  */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 bg-white'>
                        <div className="md:col-span-1">
                            <Image src="/assets/fuzion_design_home/Welcome to Fuzion Designs.png" alt='Welcome to Fuzion Designs image' width={640} height={680} className='w-[640px] h-[250px] md:h-[661px] 5xl:h-[627px]'/>
                        </div>
                        <div className="md:col-span-2">
                            <div className="pl-[12px] md:pl-[82px] lg:pl-[92px] xl:pl-[112px] 2xl:pl-[122px] 3xl:pl-[132px] 4xl:pl-[142px] 5xl:pl-[152px] pr-[12px] md:pr-[30px] lg:pr-[40px] xl:pr-[50px] 2xl:pr-[60px] 3xl:pr-[70px] 4xl:pr-[80px] 5xl:pr-[90px]">
                            <h3 className='text-primary text-[30px] font-normal pt-[25px]'>Welcome to Fuzion Designs</h3>
                            <p className='text-sm font-normal text-[#7A7A7A] leading-6'>Fuzion Designs is a custom design and build firm based in Mississauga, Ontario. We provide designer interiors and exteriors for residential and commercial customers throughout the Greater Toronto Area, specializing in stylish kitchens, bathrooms, bedrooms, living rooms, office spaces, basements, outdoor living spaces, decks, banquet halls and much much more.</p>
                            <p className='text-sm font-normal text-[#7A7A7A] leading-6 pt-[14px] lg:pt-[16px] xl:pt-[18px] 3xl:pt-[20px] 5xl:pt-[22px] pb-[95px]'>We have been in the renovation / construction business since 2008 creating interiors that now define an increasing number of properties including new condominium buildings, private residences, office suites, restaurants and more. Our services include conceptual design and schematic design, drawing and preparation, design development, outdoor living space design, material selection and specification, custom millwork design, lighting design and selection, specification, and more.</p>

                            <button className='border-4 border-primary hover:bg-[#ffb608] hover:text-white py-[12px] md:py-[14px] lg:py-[16px] xl:py-[18px] 3xl:py-[20px] 5xl:py-[23px] px-[20px] md:px-[35px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] 5xl:px-[58px] text-primary text-base xl:text-lg font-bold uppercase '>About Us</button>
                            </div>
                            

                            <div className='grid grid-cols-1 md:grid-cols-2 content-end pt-[47px]'>
                                <div className='md:col-span-1 bg-primary flex justify-center items-center pt-[70px] pb-[50px]'>
                                    <h4 className="text-[24px] font-semibold text-black">Extensive Experience</h4>
                                </div>
                                <div className='md:col-span-1 bg-black text-white  flex flex-col justify-center items-center py-[10px]'>
                                    <h4 className='text-[42px] font-bold text-white leading-normal'>250+</h4>
                                    <p className='text-base 5xl:text-lg font-semibold text-white leading-normal uppercase'>Completed Projects</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreYouReady;