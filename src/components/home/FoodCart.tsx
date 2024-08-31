import foodData from "../../services/offline/food.json";
import popular from "../../assets/popular-1.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";

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
