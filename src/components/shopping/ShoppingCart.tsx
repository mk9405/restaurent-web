import { FaLongArrowAltRight, FaMinus, FaPlus } from "react-icons/fa";
import tableImg from "../../assets/table.png";
import shopping from "../../services/offline/shopping.json";
import { PiEyeFill } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import ShoppingPopup from "./ShoppingPopup";

export default function ShoppingCart() {
  const [showPopup, setShowPopup] = useState(false);

  const toggle = () => {
    setShowPopup(true);
  };

  const togglePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="w-[1300px] mx-auto ">
      <div className="flex font-bold text-xl bg-gray-200 p-4 rounded-xl">
        <div className="flex gap-10 w-[300px]">
          <input type="checkbox" name="" id="" className="w-10" />
          <h1 className="w-[]">Food Image</h1>
        </div>
        <h1 className="w-[350px]">Details</h1>
        <h1 className="w-[100px]">Price </h1>
        <h1 className="w-[200px]">Quantity</h1>
        <h1 className="w-[150px]">Total</h1>
        <h1 className="">Action</h1>
      </div>
      {shopping.map((d) => (
        <div className="flex  py-4 px-5 border-b-2 shadow-sm rounded-xl items-center">
          <div className="flex gap-10 w-[300px]">
            <input type="checkbox" name="" id="" className="w-8" />
            <img src={tableImg} alt="" />
          </div>
          <div className="w-[350px]">
            <h1 className="font-bold text-xl pb-2">{d.title}</h1>
            <h1 className="text-red-500 font-semibold">Size:{d.size}</h1>
            <h1 className="font-semibold text-base">Addon:{d.addon}</h1>
          </div>
          <h1 className="font-semibold text-xl w-[100px]">${d.price}</h1>
          <div className="flex gap-4 mr-[50px] items-center font-bold border-2 p-2 rounded-xl border-red-200 ">
            <div className="p-3 bg-red-100 rounded-md">
              <FaMinus color="red" />
            </div>
            1
            <div className="p-3 bg-red-500 rounded-md">
              <FaPlus color="white" />
            </div>
          </div>
          <h1 className="font-semibold text-xl w-[150px]">${d.total}</h1>
          <div
            onClick={toggle}
            className="p-2 flex bg-black text-white rounded-lg gap-2 mr-4 items-center cursor-pointer"
          >
            <PiEyeFill size={18} />
            <h1 className="text-lg font-bold">View</h1>
          </div>
          <div className="bg-red-500 p-2 rounded-xl">
            <RiDeleteBin5Line size={24} color="white" />
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="flex mx-auto items-center gap-1 font-semibold text-lg text-white bg-red-500 py-3 rounded-lg px-4 my-10  "
      >
        Proceed to Checkout
        <FaLongArrowAltRight />
      </button>
      {showPopup && <ShoppingPopup togglePopupClose={togglePopupClose} />}
    </div>
  );
}
