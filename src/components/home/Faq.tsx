import faqImg from "../../assets/faq-1.png";
import faqImg2 from "../../assets/faq-2.png";
import faqImg3 from "../../assets/faq-3.png";
import faqImg4 from "../../assets/faq-4.png";
import { IoIosArrowUp } from "react-icons/io";
import "../../App.css";
import faqData from "../../services/offline/faq.json";
import { useState } from "react";

export default function Faq() {
  const [accordian, setAccordian] = useState(1);

  const toggleAccordian = (i: number) => {
    if (accordian === i) {
      setAccordian(1);
    } else {
      setAccordian(i);
    }
  };
  return (
    <div className="faq flex flex-wrap mx-auto justify-center gap-14 py-20 max-sm:p-10">
      <div>
        <h1 className="text-[#000929] font-bold text-5xl max-sm:text-3xl max-sm:w-full max-sm:mx-auto pb-14">
          Foodie FAQ: Your Culinary <br /> Queries Answerered
        </h1>
        <div>
          {faqData.map((d) => (
            <>
              <div
                key={d.id}
                onClick={() => toggleAccordian(d.id)}
                className={
                  accordian !== d.id
                    ? "flex justify-between items-center font-bold text-lg max-sm:text-base max-sm:p-4 bg-white w-[550px] max-sm:w-full p-5 rounded-lg shadow-lg mb-4 cursor-pointer"
                    : "flex justify-between items-center font-bold text-lg max-sm:text-base max-sm:p-4 bg-white w-[550px] max-sm:w-full p-5 rounded-lg shadow-lg cursor-pointer"
                }
              >
                <h1>{d.title}</h1>
                <IoIosArrowUp />
              </div>
              {accordian === d.id ? (
                <div className="font-semibold text-base bg-white w-[550px] max-sm:w-full p-5 rounded-lg shadow-lg mb-4 cursor-pointer">
                  {d.subtitle}
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-4 pb-4">
          <img src={faqImg} alt="" className="max-sm:w-[180px]" />
          <img src={faqImg2} alt="" width={200} className="max-sm:w-[120px]" />
        </div>
        <div className="flex gap-4">
          <img src={faqImg3} alt="" width={255} className="max-sm:w-[120px]" />
          <img src={faqImg4} alt="" className="max-sm:w-[180px]" />
        </div>
      </div>
    </div>
  );
}
