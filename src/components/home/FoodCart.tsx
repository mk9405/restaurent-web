import foodData from "../../services/offline/food.json";
import popular from "../../assets/popular-1.png";
import featured from "../../assets/featured-1.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import popularTag from "../../assets/icons/popularTag.png";

export default function FoodCart() {
  return (
    <>
      {foodData.map((d) => (
        <div className="group flex  relative gap-5 shadow-lg w-[600px]">
          <div className="flex text-white bg-black backdrop-blur-sm p-2 m-2 rounded-xl font-bold absolute z-20">
            <TiStarFullOutline color="orange" size={20} />
            4.7(2.5k)
          </div>
          <div className=" overflow-hidden rounded-tl-xl rounded-bl-xl">
            <img src={popular} alt="" className="group-hover:scale-105 duration-500"/>
          </div>
          <div className="py-5">
            <h1 className="font-bold text-xl pb-3">{d.name}</h1>
            <p className="flex items-center gap-1 font-semibold text-md pb-3 ">
              <CiCircleCheck color="red" size={20} />4 Piece Chicken
            </p>
            <p className="flex items-center gap-1 font-semibold text-md pb-3 border-b-2 ">
              <CiCircleCheck color="red" size={20} />Spicy Souce
            </p>
            <div className="flex justify-between py-3 items-center">
              <h1 className="font-extrabold text-2xl ">$30</h1>
              <button
                type="submit"
                className="p-3 border-2 rounded-lg font-semibold flex items-center gap-2 text-gray-400 group-hover:bg-[red] group-hover:text-white duration-500"
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
        <div className="group gap-5 shadow-lg w-[400px] relative ">
          <div className="absolute flex items-center justify-between w-full p-3 z-20">
            <FaRegHeart
              color="red"
              size={36}
              className="bg-white p-2 rounded-full"
            />
            <div className="font-bold text-white bg-black p-2 rounded-lg">
              20% Off
            </div>
          </div>
          <div className="overflow-hidden rounded-tl-xl rounded-tr-xl">
            <img
              src={featured}
              alt=""
              className="group-hover:scale-105 duration-500"
            />
          </div>
          <div className="flex relative justify-between p-4 items-center border-b-2">
            {d.id === 1 && (
              <div className="absolute -top-5 -left-2 ">
                <img src={popularTag} alt="" />
              </div>
            )}

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
                className="py-3 w-full justify-center border-2 rounded-lg font-semibold flex items-center gap-2 text-gray-400 group-hover:bg-red-600 group-hover:text-white duration-500"
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

export function WhislistCart() {
  return (
    <>
      {foodData.map((d) => (
        <div key={d.id} className="flex gap-5 shadow-lg w-[49%]">
          <img src={popular} alt="" width={200} />
          <div className="py-2">
            <h1 className="font-bold text-lg pb-2">{d.name}</h1>
            <p className="font-semibold text-sm pb-2 ">4 Piece Chicken</p>
            <p className="font-semibold text-sm pb-2 border-b-2">Spicy Souce</p>
            <div className="flex justify-between py-2 items-center">
              <h1 className="font-extrabold text-xl ">$30</h1>
              <button
                type="submit"
                className="p-2 border-2 rounded-lg font-semibold flex items-center gap-2 text-gray-400"
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
