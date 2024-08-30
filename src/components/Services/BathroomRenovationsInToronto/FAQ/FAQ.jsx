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
      "How long does a bathroom renovation typically take?",
    answer:
      "The timeline can vary based on the scope of work. A simple remodel might take 1-2 weeks, while larger renovations could extend to 4-6 weeks or more."
  },
  {
    id: 2,
    question:
      "Do I need permits for my bathroom renovation?",
    answer:
      "It depends on the scope of the work. Structural changes, plumbing alterations, and electrical upgrades often require permits. Your contractor can advise you on local regulations."
  },
  {
    id: 3,
    question:
      "Can I renovate my bathroom on a budget?",
    answer:
      "Yes, by prioritizing essential upgrades, choosing cost-effective materials, and avoiding unnecessary changes, you can achieve a budget-friendly renovation."
  },
  {
    id: 4,
    question:
      "How can I ensure my bathroom renovation stays on schedule?",
    answer:
      "Clear communication with your contractor, timely decision-making on design choices, and preparation for potential delays can help maintain the timeline."
  },
  {
    id: 5,
    question:
      "How do I minimize disruption during the renovation process?",
    answer:
      "Establish a clear schedule with your contractor, designate alternative bathroom facilities if possible, and communicate any specific concerns or preferences."
  },
  {
    id: 6,
    question:
      "What steps can I take to make my bathroom more energy-efficient?",
    answer:
      "Install water-saving fixtures, LED lighting, and adequate insulation. Consider upgrading to energy-efficient appliances and incorporating sustainable materials."
  },
];
const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="full__section_l_p pr-3 md:pr-0 padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 md:gap-[30px]">
          <div className="order-1 md:order-2 md:col-span-3 flex items-center mt-[20px] md:mt-0">
            <div className="">
              <Image
                src="/assets/bathroom_renovation/FAQ.png"
                width={768}
                height={547}
                alt="faq  image"
                className="w-[768px] h-[288px] md:h-[547px]"
              />
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-3 pt-3 md:pt-0">
            <div className="flex flex-col justify-center items-center md:items-start">
              <div>
              <HeadingIcon text={headingIconText.faq__headingIconText}/>
              </div>

              <div>
                <h3 className="text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] leading-normal font-bold text-black text-center md:text-start pb-2">
                Common Questions About Bathroom Renovations
                
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
