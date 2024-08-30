import Image from "next/image";
import React from "react";

const NeedHelpContactUs = () => {
  return (
    <div>
      <div className="">
        {/* first div  */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="md:col-span-1  bg-black text-white py-[65px]">
            <div className="full__section_l_p">
              <h3 className="font-black text-white text-[42px] text-center leading-snug">
                Need Help? Contact US
              </h3>
            </div>
          </div>
          <div className="md:col-span-1  bg-[#393838] pt-[53px] pb-[47px]">
            <div className="full__section_r_p flex items-center justify-center gap-[45px]">
              <button className="border-4 border-primary hover:bg-[#ffb608] hover:text-white py-[12px] md:py-[14px] lg:py-[16px] xl:py-[18px] 3xl:py-[20px] 5xl:py-[23px] px-[20px] md:px-[35px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] 5xl:px-[58px] text-primary text-base xl:text-lg font-bold uppercase">
                Get Estimate
              </button>
              <button className="flex items-center gap-[5px] border-4 border-primary hover:bg-[#ffb608] hover:text-white py-[12px] md:py-[14px] lg:py-[16px] xl:py-[18px] 3xl:py-[20px] 5xl:py-[23px] px-[20px] md:px-[35px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] 5xl:px-[58px] text-primary text-base xl:text-lg font-bold uppercase">
                <Image
                  src="/assets/icon/home_phone_icon.png"
                  alt="phone icon"
                  width={22}
                  height={18}
                  className="hover:filter hover:brightness-0 hover:invert"
                />{" "}
                Call Us
              </button>
            </div>
          </div>
        </div>
        {/* second div  */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="md:col-span-1 bg-[#2A2A2A] pt-[80px] px-[40px]">
            <h5 className="text-lg font-semibold text-white leading-normal pb-[12px]">
              Professionalism <br />
              We honour our commitments
            </h5>
            <div className="w-[136px] h-[4px] bg-primary"/>
            <p className="text-sm font-normal text-white pt-[12px] pb-[10px] md:pb-0">
              If you're looking to redesign your home or commercial space,
              Fuzion Designs is the right place for you. Our designers will work
              with you to understand what it is that you love . If you want to
              make something special out of your home or office, call us today.
            </p>
          </div>
          <div className="md:col-span-2">
            <Image
              src="/assets/fuzion_design_home/Professional.png"
              alt="Professional"
              width={1206}
              height={905}
            />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:col-span-1 bg-primary">
                    <h5 className="text-[24px] font-medium text-[#304133] pl-10 pt-[10px]">Call For a Consultation:</h5>
                    <p className="text-[24px] font-medium text-[#304133] text-center pb-[37px] pt-[10px]">416-571-0011</p>
                </div>
                <div className="md:col-span-1 bg-white py-3 md:py-0">
                    <div className="flex justify-center items-center h-full">
                    <button className="flex items-center gap-2 justify-center text-sm font-medium hover:bg-[#ffb608] hover:text-white text-[#2A2A2A] border-4 border-[#2A2A2A] px-[45px] py-[18px] bg-white"><Image src="/assets/icon/right_arrow.png" alt="right arrow" width={14} height={14} className="hover:filter hover:brightness-0 hover:invert"/> Get Estimate</button>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpContactUs;
