import Image from "next/image";
import React from "react";

const brandImg = [
  "/assets/home_brand/brand1.png",
  "/assets/home_brand/brand2.png",
  "/assets/home_brand/brand3.png",
  "/assets/home_brand/brand4.png",
  "/assets/home_brand/brand5.png",
  "/assets/home_brand/brand6.png",
  "/assets/home_brand/brand7.png",
  "/assets/home_brand/brand8.png",
  "/assets/home_brand/brand9.png",
  "/assets/home_brand/brand10.png",
  "/assets/home_brand/brand11.png",
  "/assets/home_brand/brand12.png",
  "/assets/home_brand/brand13.png",
  "/assets/home_brand/brand14.png",
  "/assets/home_brand/brand15.png",
  "/assets/home_brand/brand16.png",
];

const HomeBrand = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 -mt-[70px]">
          {brandImg.map((img, index) => {
            return (
              <div key={index} className="py-6">
                <Image
                  src={img}
                  alt="home brand image"
                  height={110}
                  width={200}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBrand;
