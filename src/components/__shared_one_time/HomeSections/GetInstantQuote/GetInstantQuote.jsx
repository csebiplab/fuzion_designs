"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const GetInstantQuote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3 className="text-[28px] text-center font-semibold uppercase text-white py-[55px]">
        Get INSTANT QUOTE
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 mx-auto px-4 md:px-0">
        {/* first div  */}
        <div className="flex gap-[20px]">
          <div className="w-1/2">
            <label
              htmlFor="firstName"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("firstName", { required: true })}
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2 ">
            <label
              htmlFor="lastName"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("lastName", { required: true })}
              placeholder="Last Name"
            />
          </div>
        </div>
        {/* second div  */}
        <div className="flex gap-[20px] py-[5px]">
          <div className="w-1/2">
            <label
              htmlFor="houseNumber"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("houseNumber", { required: true })}
              placeholder="House Number"
            />
          </div>
          <div className="w-1/2 ">
            <label
              htmlFor="streetName"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("streetName", { required: true })}
              placeholder="Street Name"
            />
          </div>
        </div>
        {/* third div  */}
        <div className="flex gap-[20px]">
          <div className="w-1/3">
            <label
              htmlFor="city"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("city", { required: true })}
              placeholder="City"
            />
          </div>
          <div className="w-1/3 ">
            <label
              htmlFor="province"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("province", { required: true })}
              placeholder="Province"
            />
          </div>
          <div className="w-1/3 ">
            <label
              htmlFor="typeOfProject"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("typeOfProject", { required: true })}
              placeholder="Type of project"
            />
          </div>
        </div>
        {/* forth div  */}
        <div className="flex gap-[20px] py-[5px]">
          <div className="w-1/3">
            <label
              htmlFor="phoneNumber"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
            />
          </div>
          <div className="w-1/3 ">
            <label
              htmlFor="posttalCode"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("postalCode", { required: true })}
              placeholder="Postal Code"
            />
          </div>
          <div className="w-1/3 ">
            <label
              htmlFor="email"
              className="text-[15px] font-normal text-[#F00]"
            >
              *
            </label>
            <input
              className="w-full placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-normal py-[12px] px-[12px] border-[1px] border-[#DDD] bg-[#FAFAFA] rounded-[3px]"
              {...register("email", { required: true })}
              placeholder="Email"
            />
          </div>
        </div>
        {/* forth div end  */}

        {/* fifth div  */}
        <div className="w-3/4 md:w-1/3 flex itmes-center justify-between bg-white p-[11px]">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-[10px] transform scale-[1.5]"
            {...register("terms", { required: true })}
          />
          <label
            htmlFor="terms"
            className="text-[14px] font-normal text-black"
          >
            I'm not a robot
          </label>
        </div>
        <div>
            <Image src="/assets/fuzion_design_home/recaptcha.png" alt="recaptcha image" width={50} height={50}/>
        </div>
        </div>
        

        <div className="pt-[18px] pb-[33px]">
          <button className="bg-[#0170B9] rounded-[3px] w-full text-center text-[15px] font-normal text-white py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInstantQuote;
