import faqImg from "../../assets/faq-1.png";
import faqImg2 from "../../assets/faq-2.png";
import faqImg3 from "../../assets/faq-3.png";
import faqImg4 from "../../assets/faq-4.png";
 
export default function Faq() {
  return (
    <div className=" flex mx-auto justify-center gap-10 py-20">
      <div>
        <h1 className="text-[#000929] font-bold text-5xl">
          Foodie FAQ: Your Culinary <br /> Queries Answerered{" "}
        </h1>
      </div>
      <div>
        <div className="flex gap-4 pb-4">
          <img src={faqImg} alt="" />
          <img src={faqImg2} alt="" width={200} />
        </div>
        <div className="flex gap-4">
          <img src={faqImg3} alt="" width={255}/>
          <img src={faqImg4} alt="" />
        </div>
      </div>
    </div>
  );
}
