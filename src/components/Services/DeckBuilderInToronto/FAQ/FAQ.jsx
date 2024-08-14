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
      "What is the Purpose of the Deck?",
    answer:
      "The purpose could be for entertaining guests, dining outdoors, relaxing, or adding value to your home."
  },
  {
    id: 2,
    question:
      "What are the Local Building Codes and Permits Required?",
    answer:
      "Building codes vary by location. In Toronto, you typically need permits for decks over a certain height or size. It's essential to check with your local municipality or have your deck builder handle this for you."
  },
  {
    id: 3,
    question:
      "Can I See Examples of Previous Work?",
    answer:
      "Yes, reputable deck builders should have a portfolio or examples of their previous projects. This will give you an idea of their craftsmanship, style, and ability to meet your expectations."
  },
  {
    id: 4,
    question:
      "What Materials Will Be Used?",
    answer:
      "Common materials include wood (like cedar or pressure-treated lumber), composite decking (made from wood fibers and recycled plastic), or PVC (vinyl) decking. Each material has different maintenance requirements, costs, and aesthetic appeal."
  },
  {
    id: 5,
    question:
      "What is the Project Timeline?",
    answer:
      "Timelines can vary based on the complexity of the design, weather conditions, and permit approval. A typical deck project might take several weeks from planning to completion."
  },
  {
    id: 6,
    question:
      "How Will Communication Be Handled?",
    answer:
      "Communication should be open and frequent. A good deck builder will keep you updated on progress, and any delays, and be responsive to your questions or concerns throughout the project."
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
                src="/assets/deck_builder/FAQ.png"
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
                Questions You Must Ask Before Building Your Deck
                
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
                      className={`text-white  border-b-0 transition-colors px-5`}
                    >
                      <span className="text-white text-base font-bold">
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
