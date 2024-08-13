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
      "How much does it cost to finish a basement?",
    answer:
      "Costs can vary widely depending on factors like the size of the basement, the complexity of the renovation, and the materials used. On average, expect to budget anywhere from $20,000 to $50,000 or more for a complete basement renovation."
  },
  {
    id: 2,
    question:
      "How long does it take to renovate basements?",
    answer:
      "Again, this can vary based on the scope of work and any unforeseen challenges. A basic basement finish might take 4-8 weeks, while more complex renovations could take several months."
  },
  {
    id: 3,
    question:
      "What are the best flooring options for basements?",
    answer:
      "Good options include vinyl flooring, ceramic tile, engineered wood, and carpet tiles. These are all materials that can withstand moisture and potential flooding better than traditional hardwood."
  },
  {
    id: 4,
    question:
      "How do I prevent moisture and mold issues in my finished basement?",
    answer:
      "Ensure proper insulation and ventilation. Use moisture-resistant materials where possible. Install a dehumidifier if necessary. Address any water leaks promptly."
  },
  {
    id: 5,
    question:
      "Should I hire a professional or DIY my basement renovation?",
    answer:
      "It depends on your skills, the complexity of the project, and local building codes. Some tasks, like electrical and plumbing work, are best left to professionals. A contractor can also ensure the job is done correctly and to code."
  },
  {
    id: 6,
    question:
      "What are the potential benefits of finishing my basement?",
    answer:
      "Finishing your basement can add significant living space to your home, increasing its value. It can also provide extra rooms for family activities, entertainment, or even rental income if properly designed."
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
                src="/assets/basement_renovation/faq.png"
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
                Common Questions About Basement Renovations
                
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
