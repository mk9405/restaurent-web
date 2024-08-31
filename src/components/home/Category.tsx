import promo1 from "../../assets/PromoBanner.png";
import promo2 from "../../assets/PromoBanner-1.png";
import TraditionalFood from "./TraditionalFood";
import ProcessCraft from "./Process";
import "../../App.css"

export default function Category() {
  return (
    <div className=" justify-center items-center">
      <div className="flex mx-auto justify-center gap-[700px] py-14  ">
        <h1 className="font-bold text-5xl">Our Categories</h1>
        <button className="py-3 px-8 border-2 rounded-lg">See more</button>
      </div>
      <div className="flex mx-auto justify-center gap-[120px] pb-10">
        <div className="py-5 px-12 bg-[#f4f4f6] rounded-2xl">
          <h1>Delish Burger</h1>
          <p>25 items</p>
        </div>
        <div className="py-5 px-12 bg-[#f4f4f6] rounded-2xl">
          <h1>Sandwitches</h1>
          <p>25 items</p>
        </div>
        <div className="py-5 px-12 bg-[#f4f4f6] rounded-2xl">
          <h1>Mexcan Cuisine</h1>
          <p>25 items</p>
        </div>
        <div className="py-5 px-12 bg-[#f4f4f6] rounded-2xl">
          <h1>Italian Cuisine</h1>
          <p>25 items</p>
        </div>
      </div>
      <div className="flex gap-6 mx-auto justify-center">
        <img src={promo1} alt="" width={500} />
        <img src={promo2} alt="" />
      </div>

      <TraditionalFood />
      <ProcessCraft />
    </div>
  );
}
