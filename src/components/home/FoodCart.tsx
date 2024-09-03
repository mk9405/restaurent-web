import foodData from "../../services/offline/food.json";
import popular from "../../assets/popular-1.png";
import featured from "../../assets/featured-1.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { CiCircleCheck } from "react-icons/ci";

export default function FoodCart() {
  return (
    <>
      {foodData.map((d) => (
        <div className="flex gap-5 shadow-lg w-[600px]">
          <img src={popular} alt="" />
          <div className="py-5">
            <h1 className="font-bold text-xl pb-3">{d.name}</h1>
            <p className="font-semibold text-md pb-3 ">4 Piece Chicken</p>
            <p className="font-semibold text-md pb-3 border-b-2">Spicy Souce</p>
            <div className="flex justify-between py-3 items-center">
              <h1 className="font-extrabold text-2xl ">$30</h1>
              <button
                type="submit"
                className="p-3 border-2 rounded-lg font-semibold flex items-center gap-2 text-gray-400"
              >
                <MdOutlineAddShoppingCart />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function CategoryFoodCart() {
  return (
    <div className="flex flex-wrap justify-center gap-10 pb-14">
      {foodData.map((d) => (
        <div className=" gap-5 shadow-lg w-[400px] ">
          <img src={featured} alt="" />
          <div className="flex justify-between p-4 items-center border-b-2">
            <h1 className="font-extrabold text-2xl text-red-500 ">$30</h1>
            <div className="flex items-center font-bold text-xl">
              <TiStarFullOutline color="orange" size={24} />
              <h1 className="text-lg">4.7(2.5k)</h1>
            </div>
          </div>
          <div className="px-4">
            <h1 className="font-bold text-2xl py-3">{d.name}</h1>
            <p className="flex items-center gap-1 font-semibold text-md pb-3 ">
              <CiCircleCheck color="red" size={24} />4 Piece Chicken
            </p>
            <p className="flex items-center gap-1 font-semibold text-md pb-3">
              <CiCircleCheck color="red" size={24} />
              Spicy Souce
            </p>
            <div className="flex justify-between py-3 items-center">
              <button
                type="submit"
                className="py-3 w-full justify-center border-2 rounded-lg font-semibold flex items-center gap-2 text-gray-400"
              >
                <MdOutlineAddShoppingCart />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
