import shopping from "../../services/offline/shopping.json";
import tableImg from "../../assets/table.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

export default function ShoppingCartSummary() {
  const [color, setColor] = useState(1);

  const toggleColor = (i: number) => {
    setColor(i);
  };
  return (
    <div className="w-[30%]  ">
      <div className="bg-[#F9FAFB] rounded-xl border-2">
        <h1 className="font-bold text-2xl text-[#000929] p-4  ">
          Cart Summary
        </h1>
        <div className="flex bg-white mx-2 justify-between rounded-xl p-2">
          <h1
            onClick={() => toggleColor(1)}
            className={`${
              color === 1
                ? "text-white bg-red-500 px-3 py-2 rounded-xl cursor-pointer"
                : "px-3 py-2 rounded-xl cursor-pointer"
            }`}
          >
            Delivery
          </h1>
          <h1
            onClick={() => toggleColor(2)}
            className={`${
              color === 2
                ? "text-white bg-red-500 px-3 py-2 rounded-xl cursor-pointer"
                : "px-3 py-2 rounded-xl cursor-pointer"
            }`}
          >
            Pick Up
          </h1>
          <h1
            onClick={() => toggleColor(3)}
            className={`${
              color === 3
                ? "text-white bg-red-500 px-3 py-2 rounded-xl cursor-pointer"
                : "px-3 py-2 rounded-xl cursor-pointer"
            }`}
          >
            In Restaurent
          </h1>
        </div>
        {shopping.map((d) => (
          <div className="flex py-3 mx-3 gap-2 border-b-2">
            <div className="flex w-[200px]">
              <img src={tableImg} alt="" />
            </div>
            <div className="w-[350px]">
              <h1 className="font-bold text-md pb-2 ">{d.title}</h1>
              <h1 className="text-red-500 font-semibold pb-2">Size:{d.size}</h1>
              <h1 className=" font-semibold">${d.price}</h1>
            </div>
          </div>
        ))}

        <h1 className="text-lg mx-3 pt-3 font-semibold">Apply Coupon</h1>
        <div className="flex w-full py-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Coupon"
            className="focus:outline-none rounded-tl-xl p-2 rounded-bl-xl w-full ml-3 "
          />
          <button
            type="button"
            className="bg-red-500 text-white p-3 font-semibold rounded-tr-xl rounded-br-xl mr-3"
          >
            Apply
          </button>
        </div>
        <div className="border-b-2 pb-4">
          <div className="flex justify-between">
            <h1 className="text-lg mx-5 pt-3">SubTotal</h1>
            <h1 className="text-lg mx-5 pt-3">$120</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg mx-5 pt-3">Discount</h1>
            <h1 className="text-lg mx-5 pt-3">$12.00</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg mx-5 pt-3">Delivery Charges</h1>
            <h1 className="text-lg mx-5 pt-3">$10.00</h1>
          </div>
        </div>
        <div className="flex justify-between font-bold">
          <h1 className="text-lg mx-5 pt-3">Delivery Charges</h1>
          <h1 className="text-lg mx-5 pt-3">$120.00</h1>
        </div>
        <button
          type="submit"
          className="flex items-center gap-1 font-semibold text-lg text-white bg-red-500 py-3 rounded-lg w-[90%] mx-auto justify-center my-5   "
        >
          Place Order
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
