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
      "What types of projects does Fuzion Designs specialize in?",
    answer:
      "Fuzion Designs specializes in a wide range of projects including home additions, renovations, kitchen and bathroom remodels, and custom builds."
  },
  {
    id: 2,
    question:
      "How long does a typical project with Fuzion Designs take to complete?",
    answer:
      "Project timelines vary based on scope and complexity. Fuzion Designs provides estimated timelines during the initial consultation phase."
  },
  {
    id: 3,
    question:
      "Does Fuzion Designs provide design services?",
    answer:
      "Yes, Fuzion Designs offers comprehensive design services tailored to meet client preferences and project requirements."
  },
  {
    id: 4,
    question:
      "How does Fuzion Designs handle permits and regulatory approvals?",
    answer:
      "Fuzion Designs manages all necessary permits and ensures compliance with local building codes and regulations."
  },
  {
    id: 5,
    question:
      "What sets Fuzion Designs apart from other construction companies in Toronto?",
    answer:
      "Fuzion Designs is known for its commitment to quality craftsmanship, attention to detail, and personalized customer service."
  },
  {
    id: 6,
    question:
      "Can Fuzion Designs work within specific budget constraints?",
    answer:
      "Yes, Fuzion Designs collaborates closely with clients to develop solutions that align with their budget while delivering exceptional results."
  },
];
const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="full__section_r_p pl-3 md:pl-0 padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[20px]">
          <div className="md:col-span-3 flex items-center ">
            <div className="">
              <Image
                src="/assets/fuzion_design_home/FAQ.png"
                width={770}
                height={512}
                alt="faq  image"
                className="w-[770px] h-auto"
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
                FAQs for Our Fuzion Designs in Toronto
                
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
