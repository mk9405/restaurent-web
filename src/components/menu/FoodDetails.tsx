import { CiStar } from "react-icons/ci";
import { CategoryFoodCart } from "../home/FoodCart";
import { IoChevronDown } from "react-icons/io5";
import { FiWatch } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export default function FoodDetails() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="bg-[#FFFAFB] w-[1300px] mx-auto">
      <div className="flex mb-20 items-center bg-white border-2 py-1 rounded-xl cursor-pointer">
        <div
          onClick={toggle}
          className="flex relative items-center gap-1 p-3 border-r-2"
        >
          <h1 className="font-semibold">All Category</h1>
          <IoChevronDown />
        </div>
        {show && (
          <div className=" absolute translate-y-20 overflow-hidden bg-white border-2 duration-300 rounded-xl">
            <h1 className="hover:bg-red-300 font-semibold hover:text-white p-1">Action</h1>
            <h1 className="hover:bg-red-300 font-semibold hover:text-white p-1">Another Action</h1>
            <h1 className="hover:bg-red-300 font-semibold hover:text-white p-1">Something Else</h1>
          </div>
        )}
        <div className="flex items-center gap-1 p-3 border-r-2">
          <CiStar size={18} />
          <h1 className="font-semibold">Star Rating</h1>
          <IoChevronDown />
        </div>
        <div className="flex items-center gap-1 p-3 border-r-2">
          <CiStar size={18} />
          <h1 className="font-semibold">Price Range</h1>
          <IoChevronDown />
        </div>
        <div className="flex items-center gap-1 p-3 border-r-2">
          <FiWatch />
          <h1 className="font-semibold">Meal Type</h1>
          <IoChevronDown />
        </div>
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter your Keyword"
          className="focus:outline-none mx-4 px-2 py-2 rounded-xl bg-[#F9FAFB] min-w-[600px]"
        />
        <div className="bg-[red] text-white p-2 w-10 rounded-xl">
          <BsSearch size={24} />
        </div>
      </div>

      <CategoryFoodCart />
    </div>
  );
}
