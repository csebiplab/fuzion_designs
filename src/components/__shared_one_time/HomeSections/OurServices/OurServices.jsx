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
        <div className="grid grid-cols-1 md:grid-cols-5 ">
          <div className="md:col-span-3">
            <div>
              <h3 className="text-primary">Our Services</h3>
              <p>
                At Fuzion Designs, we are committed to delivering the best
                product using only the finest materials and the most skilled
                craftsmen in our industry. We will not settle for anything less
                than perfection when it comes to design and construction
                services. From start to finish, you can rest assured that we
                will be there with you every step of the way. Whether you are
                looking for residential remodeling or commercial construction,
                Fuzion Designs has you covered from concept to completion!
              </p>
              <p>
                Connect with us at 416-571-0011 to get a free phone
                consultation.
              </p>
              <p>Our services include but are not limited to:</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <Image
              src="/assets/fuzion_design_home/Our Services.png"
              alt="our services image"
              width={452}
              height={301}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {services.map((serviceGroup, index) => (
            <div className="md:col-span-1" key={index}>
              <ul>
                {serviceGroup.map((service, idx) => (
                  <li key={idx}>{service}</li>
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
