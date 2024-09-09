import { useState } from "react";
import foodImg from "../../assets/food-video.png";
import { FoodReviews } from "./FoodReviews";
import boughtFood from "../../services/offline/boughtFood.json";
import { FaMinus, FaPlus } from "react-icons/fa";
import promoBanner from "../../assets/PromoBanner-1.png";
import promoBanner2 from "../../assets/PromoBanner.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function FoodDetailsView() {
  const [color, setColor] = useState(1);

  const toggleColor = (i: number) => {
    setColor(i);
  };

  return (
    <div className="w-[1300px] mx-auto pb-16 flex flex-wrap justify-between">
      <div className="w-[800px]">
        <h1 className="text-5xl font-bold pb-10 text-[#000929]">
          Chicken skewers with Slices of Sweet
        </h1>
        <div className="flex border-b-2 gap-10 w-[800px]">
          <h1
            onClick={() => toggleColor(1)}
            className={`${
              color === 1
                ? "font-bold text-xl pb-4 text-red-500 border-b-2 border-red-500 cursor-pointer"
                : "font-bold text-xl pb-4 cursor-pointer"
            }`}
          >
            Food Details
          </h1>
          <h1
            onClick={() => toggleColor(2)}
            className={`${
              color === 2
                ? "font-bold text-xl pb-4 text-red-500 border-b-2 border-red-500 cursor-pointer"
                : "font-bold text-xl pb-4 cursor-pointer"
            }`}
          >
            Food Video
          </h1>
          <h1
            onClick={() => toggleColor(3)}
            className={`${
              color === 3
                ? "font-bold text-xl pb-4 text-red-500 border-b-2 border-red-500 cursor-pointer"
                : "font-bold text-xl pb-4 cursor-pointer"
            }`}
          >
            Review
          </h1>
        </div>
        {color === 1 && (
          <div>
            <p className="text-base text-gray-500 font-semibold py-5">
              Indulge in a mouthwatering culinary delight with our Chicken
              Skewers paired with vibrant slices of sweet bell peppers. Tender
              pieces of succulent chicken are marinated to perfection, resulting
              in a flavorful and juicy experience.
            </p>
            <h1 className="font-bold text-lg">Ingredients:</h1>
            <p className="text-base text-gray-500 font-semibold pb-5">
              * Fresh chicken breast or thigh meat, cubed
              <br /> * Assorted sweet bell peppers (red, yellow, and green),
              sliced into rings <br /> * Marinade (your choice of herbs, spices,
              and seasonings) <br /> * Olive oil <br /> * Salt and pepper
            </p>
            <h1 className="font-bold text-lg">Preparation:</h1>
            <p className="text-base text-gray-500 font-semibold pb-5">
              * Fresh chicken breast or thigh meat, cubed
              <br /> * Assorted sweet bell peppers (red, yellow, and green),
              sliced into rings <br /> * Marinade (your choice of herbs, spices,
              and seasonings) <br /> * Olive oil <br /> * Salt and pepper
            </p>
          </div>
        )}
        {color === 2 && (
          <div>
            <p className="text-base text-gray-500 font-semibold py-5">
              In this vlog video, join us on a culinary journey as we create a
              mouthwatering dish that's perfect for any occasion - Grilled
              Chicken Skewers with Slices of Sweet Bell Peppers. Get ready to
              tantalize your taste buds as we showcase the step-by-step process
              of marinating tender chicken,
            </p>
            <img src={foodImg} alt="" />
            <p className="text-base text-gray-500 font-semibold py-5">
              Join us in the kitchen as we share our passion for cooking and
              culinary creativity. Whether you're looking for a delightful
              appetizer, a flavorful main course, or simply a cooking
              inspiration, these Grilled Chicken Skewers with Slices of Sweet
              Bell Peppers are a must-try!
            </p>
            <p className="text-base text-gray-500 font-semibold py-5">
              <p className="font-bold text-black">Note:</p> This is a fictional
              vlog video description and timestamps. You can adjust the content
              and timestamps based on your actual video footage and narration.
            </p>
          </div>
        )}
        {color === 3 && <FoodReviews />}
      </div>
      <div className="w-[450px]  ">
        <div className="bg-[#F9FAFB] rounded-xl border-2">
          <h1 className="font-bold text-2xl text-[#000929] p-4  ">
            Frequently Bought together
          </h1>
          {boughtFood.map((d) => (
            <div className="flex m-4 justify-between items-center rounded-xl p-4 bg-white">
              <div className="flex gap-4">
                <input type="checkbox" name="" id="" className="w-10 bg-red-500 text-red-500" />
                <h1 className="font-semibold">
                  {d.name}(${d.price}.00)
                </h1>
              </div>
              <div className="flex gap-4 items-center font-bold  ">
                <div className="p-3 bg-red-100 rounded-md">
                  <FaMinus color="red" />
                </div>
                1
                <div className="p-3 bg-red-500 rounded-md">
                  <FaPlus color="white" />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between mx-5">
            <div className="flex gap-4 items-center font-bold border-2 p-2 rounded-xl border-red-200 ">
              <div className="p-3 bg-red-100 rounded-md">
                <FaMinus color="red" />
              </div>
              1
              <div className="p-3 bg-red-500 rounded-md">
                <FaPlus color="white" />
              </div>
            </div>
            <div className="bg-black text-white p-4 rounded-xl font-bold ">
              <h1>Variention Size</h1>
            </div>
          </div>
          <div className="pr-4">
            <button
              type="submit"
              className="w-[96%] p-3 m-4 justify-center border-2 rounded-lg font-semibold flex items-center gap-2 text-white bg-red-500"
            >
              <MdOutlineAddShoppingCart />
              Add To Cart
            </button>
          </div>
        </div>
        <div className="pt-10">
          <img src={promoBanner2} alt="" className="pb-4" />
          <img src={promoBanner} alt="" />
        </div>
      </div>
    </div>
  );
}
