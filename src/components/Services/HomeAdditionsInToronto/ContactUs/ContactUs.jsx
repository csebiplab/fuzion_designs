import Image from "next/image";
import React from "react";

import "./ContactUs.css";

const socialIcon = [
  "/assets/icon/f.png",
  "/assets/icon/x.png",
  "/assets/icon/i.png",
  "/assets/icon/l.png",
];

const ContactUs = () => {
  return (
    <div className=" ">
      <div className="padding__top ">
        <div className="">
          <div className="container ">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[30px]">
              <div className="md:col-span-3 flex items-center">
                <div className="contactUs_cart_bg py-[43px] px-[26px]">
                  <h5 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] font-bold text-center md:text-left pb-[27px]">
                    Contact Us
                  </h5>
                  <p className="flex items-center gap-[15px] text-base 5xl:text-lg font-normal">
                    <Image
                      src="/assets/icon/map.png"
                      alt="map icon"
                      width={30}
                      height={30}
                    />
                    <a
                      href="location:1300 Britannia Rd E, Mississauga, ON L4W 1C8, Canada"
                      className=""
                    >
                      1300 Britannia Rd E, Mississauga, ON L4W 1C8, Canada
                    </a>
                  </p>
                  <p className="flex items-center gap-[15px] text-base 5xl:text-lg font-normal py-[22px]">
                    <Image
                      src="/assets/icon/p.png"
                      alt="phone icon"
                      width={30}
                      height={30}
                    />

                    <a href="tel:+1 416-571-0011" className="">
                      +1 416-571-0011
                    </a>
                  </p>
                  <p className="flex items-center gap-[15px] text-base 5xl:text-lg font-normal">
                    <Image
                      src="/assets/icon/m.png"
                      alt="email icon"
                      width={30}
                      height={30}
                    />
                    <a href="mail:info@fuziondesigns.ca" className="">
                      info@fuziondesigns.ca
                    </a>
                  </p>

                  <div className="flex items-center gap-[50px] pt-[29px] pb-[25px]">
                    {socialIcon.map((icon, index) => (
                      <div key={index} className="">
                        <Image
                          src={icon}
                          alt={`social icon ${index}`}
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                  <h5 className="text-[25px] font-bold">
                    Best Designing Company Toronto
                  </h5>
                  <Image
                    src="/assets/icon/contact_logo.png"
                    alt="contact us logo"
                    width={267}
                    height={112}
                    className="py-[46px]"
                  />
                  <h5 className="text-[25px] font-bold">Fuzion Designs</h5>
                </div>
              </div>
              <div className="md:col-span-3 flex items-center">
                <div>
                  <h5 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] font-bold text-black">
                    Give Us Feedback
                  </h5>
                  <form className="pt-[25px]">
                    <div className="w-full flex justify-between items-center gap-[20px]">
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-black"
                          htmlFor="name"
                        >
                          Your Name <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="text"
                          placeholder="Robot Fox"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-black"
                          htmlFor="email"
                        >
                          Your Email <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="email"
                          placeholder="info@example.com"
                        />
                      </div>
                    </div>

                    <div className="w-full flex items-center gap-[20px] py-[25px]">
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-black"
                          htmlFor="subject"
                        >
                          Subject <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-black"
                          htmlFor="phone"
                        >
                          Your Phone <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="number"
                          placeholder="+1 416-571-0011"
                        />
                      </div>
                    </div>

                    <div className="w-full pb-[35px]">
                      <label
                        className="text-lg font-normal text-black"
                        htmlFor="message"
                      >
                        Message <sup>*</sup>
                      </label>
                      <textarea
                        className="w-full input_bg pt-[16px] pb-[30px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                        name="message"
                        placeholder="Write Message"
                      ></textarea>
                    </div>
                    <div className="flex justify-center pb-[28px] md:pb-0">
                      <button className="contact_btn text-white flex items-center gap-[5px] text-lg font-normal py-[7px] px-[33px]">
                        Submit{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M1.614 2.76096L7.66652 5.26541L1.614 4.48763V2.76096ZM7.66652 9.54319L1.614 12.0476V10.321L7.66652 9.54319ZM0 0.404297V5.84874L12.105 7.4043L0 8.95985V14.4043L16.947 7.4043L0 0.404297Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
