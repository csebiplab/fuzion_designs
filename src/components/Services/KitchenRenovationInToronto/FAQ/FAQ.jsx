"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
const faqQuestionsNAns = [
  {
    id: 1,
    question:
      "What types of kitchen renovations does Fuzion Designs specialize in?",
    answer:
      "Fuzion Designs specializes in a wide range of kitchen renovations including full remodels, cabinet upgrades, countertop replacements, and complete design."
  },
  {
    id: 2,
    question:
      "Does Fuzion Designs provide design services for kitchen renovations?",
    answer:
      "Yes, Fuzion Designs offers comprehensive design services to help clients conceptualize their ideal kitchen space, from layout and materials selection to color schemes and finishes."
  },
  {
    id: 3,
    question:
      "What is the process for starting a kitchen renovation project with Fuzion Designs?",
    answer:
      "The process begins with an initial consultation where we discuss your goals, budget, and timeline. We then proceed with design development, material selection, construction, and final walkthrough."
  },
  {
    id: 4,
    question:
      "Can Fuzion Designs work within specific budget constraints?",
    answer:
      "Yes, Fuzion Designs strives to accommodate various budget requirements while ensuring quality craftsmanship and meeting client expectations."
  },
  {
    id: 5,
    question:
      "Does Fuzion Designs handle permits and regulatory approvals?",
    answer:
      "Yes, we manage the permit application process and ensure compliance with local building codes and regulations for all kitchen renovation projects."
  },
  {
    id: 6,
    question:
      "What materials does Fuzion Designs use for kitchen renovations?",
    answer:
      "We use high-quality materials sourced from trusted suppliers, including cabinets, countertops, flooring, tiles, and fixtures, tailored to your design preferences and budget."
  },
];
const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="full__section_r_p pl-3 md:pl-0 padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/kitchen_renovation/FAQ.png"
                width={768}
                height={547}
                alt="faq  image"
                className="w-[768px] h-auto"
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 md:pt-0">
            <div className="flex flex-col justify-center items-center md:items-start">
              <div>
              <HeadingIcon text={headingIconText.faq__headingIconText}/>
              </div>

              <div>
                <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-start pb-2">
                Questions You Must Ask Doing kitchen renovations
                
                </h3>
              </div>
            </div>
            <>
              {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
                <Accordion
                  key={id}
                  open={open === id}
                  className="mb-1 text-white bg-primary"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(id)}
                    className=" relative"
                  >
                    <div
                      className={`text-[#161616]  border-b-0 transition-colors px-5`}
                    >
                      <span className="text-[#161616] text-base font-bold">
                        {question}
                      </span>
                    </div>
                    <div className="absolute right-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M7.85438 8.80353L0.908939 1.3452C0.432523 0.833597 0.795322 -9.06148e-07 1.4944 -8.7698e-07L14.5803 -3.30987e-07C15.2793 -3.01819e-07 15.6421 0.833599 15.1657 1.3452L8.22029 8.80353C8.12142 8.9097 7.95324 8.9097 7.85438 8.80353Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </AccordionHeader>
                  <AccordionBody className="px-3 py-1 text-base font-normal bg-white text-black border border-primary">
                    {answer}
                  </AccordionBody>
                </Accordion>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
