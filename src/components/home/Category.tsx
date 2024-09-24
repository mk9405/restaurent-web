import promo1 from "../../assets/PromoBanner.png";
import promo2 from "../../assets/PromoBanner-1.png";
import TraditionalFood from "./TraditionalFood";
import "../../App.css";
import { CategoryFoodCart } from "./FoodCart";
import { PiHamburger } from "react-icons/pi";
import { LuSandwich } from "react-icons/lu";
import { GiBread, GiNoodles } from "react-icons/gi";

export default function Category() {
  return (
    <div className=" max-w-[1300px] mx-auto max-sm:w-full justify-center items-center py-14 max-sm:px-10">
      <div className="flex justify-between pb-14 max-sm:justify-center max-lg:px-10  ">
        <h1 className="font-bold text-5xl max-sm:text-3xl">Our Categories</h1>
        <button className="py-3 px-8 border-2 rounded-lg max-sm:hidden">See more</button>
      </div>

      <div>
        <div>
          <div className="flex max-sm:flex-wrap item-center justify-between pb-12 max-sm:gap-y-4">
            <div>
              <button className="button" id="btn2">
                <div className="flex flex-row item-center gap-2 max-sm:w-full">
                  <span className="span">
                    <PiHamburger size={50} />
                  </span>
                  <div className="mt-2 flex gap-1">
                    <span className="span">Delish</span>
                    <span className="span">Burger</span>
                  </div>
                </div>
              </button>
            </div>

            <div>
              <button className="button" id="btn2">
                <div className="flex flex-row item-center gap-2">
                  <span className="span">
                    <LuSandwich size={50} />
                  </span>
                  <div className="mt-2 flex gap-1">
                    <span className="span">Sand</span>
                    <span className="span">Wiches</span>
                  </div>
                </div>
              </button>
            </div>

            <div>
              <button className="button">
                <div className="flex flex-row item-center gap-2">
                  <span className="span">
                    <GiBread size={50} />
                  </span>
                  <div className="mt-2 flex gap-1">
                    <span className="span">Mexcan</span>
                    <span className="span">Cuisine</span>
                  </div>
                </div>
              </button>
            </div>

            <div>
              <button className="button" id="btn2">
                <div className="flex flex-row item-center gap-2">
                  <span className="span">
                    <GiNoodles size={50} />
                  </span>
                  <div className="mt-3 flex gap-1">
                    <span className="span">Italian</span>
                    <span className="span">Cuisine</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between max-sm:gap-y-4">
        <img src={promo1} alt="" width={600} />
        <img src={promo2} alt="" />
      </div>

      <TraditionalFood />
      <CategoryFoodCart />
    </div>
  );
}
