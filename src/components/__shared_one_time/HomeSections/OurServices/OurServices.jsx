import Image from "next/image";
import React from "react";

const services = [
  [
    "Architectural Design",
    "Bathroom Design",
    "Bathroom Remodeling",
    "Building Design",
    "Custom Beds",
    "Custom Home",
    "Custom Home Bars",
    "Custom Storage",
    "Deck Building",
    "Deck Design",
    "Demolition",
  ],
  [
    "Floor Plans",
    "Garage Building",
    "Garage Design",
    "Garage Storage",
    "Home Additions",
    "Home Extensions",
    "Home Gym Design & Construction",
    "Home Remodeling",
    "Home Restoration",
    "Home Theater Design",
    "House Plans",
  ],
  [
    "Kitchen Design",
    "Kitchen Remodeling",
    "Laminate Flooring Installation",
    "Laundry Room Design",
    "Lighting Design",
    "Lighting Installation",
    "Mudroom Design",
    "Multigenerational Homes",
    "New Home Construction",
    "Outdoor Kitchen Construction",
    "Outdoor Kitchen Design",
  ],
  [
    "Outdoor Lighting Design",
    "Porch Design & Construction",
    "Project Management",
    "Rooftop Deck Installation",
    "Site Preparation",
    "Space Planning",
    "Under Deck Ceiling Installation",
    "Universal Design",
    "Wood Floor Installation",
    "Workshop Design & Construction",
  ],
];

const OurServices = () => {
  return (
    <div>
      <div className="container">
        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[28px]">
          <div className="md:col-span-3">
            <div>
              <h3 className="text-primary text-[30px] font-normal pt-[35px] pb-[14px]">Our Services</h3>
              <p className="text-[15px] font-normal text-[#7A7A7A]">
                At Fuzion Designs, we are committed to delivering the best
                product using only the finest materials and the most skilled
                craftsmen in our industry. We will not settle for anything less
                than perfection when it comes to design and construction
                services. From start to finish, you can rest assured that we
                will be there with you every step of the way. Whether you are
                looking for residential remodeling or commercial construction,
                Fuzion Designs has you covered from concept to completion!
              </p>
              <p className="text-[15px] font-normal text-[#7A7A7A] py-[23px]">
                Connect with us at 416-571-0011 to get a free phone
                consultation.
              </p>
              <p className="text-[15px] font-normal text-[#7A7A7A] pb-[43px]">Our services include but are not limited to:</p>
            </div>
          </div>
          <div className="md:col-span-2 pt-[43px]">
            <Image
              src="/assets/fuzion_design_home/Our Services.png"
              alt="our services image"
              width={452}
              height={301}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-2 md:grid-cols-4 pb-[33px]">
          {services.map((serviceGroup, index) => (
            <div className="md:col-span-1" key={index}>
              <ul className="pl-4 md:pl-0 pt-4 md:pt-0">
                {serviceGroup.map((service, idx) => (
                  <li className="list-disc text-xs md:text-sm 5xl:text-[15px] text-[#7A7A7A] font-normal py-1" key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
