import { IoIosAddCircleOutline } from "react-icons/io";
import ShoppingAddresses from "./ShoppingAddresses";
import ShoppingCartSummary from "./ShoppingCartSummary";
import payment1 from "../../assets/icons/download (1).png";
import payment2 from "../../assets/icons/download.png";
import payment3 from "../../assets/icons/instamojo.png";
import payment4 from "../../assets/icons/rozarpay.png";

export default function ShoppingCartAddressView() {
  return (
    <div className="w-[1300px] mx-auto mb-20 flex justify-between ">
      <div className=" w-[65%] ">
        <h1 className="font-bold text-2xl text-[#000929] pb-5">Addresses</h1>
        <div className="flex justify-between mb-5">
          <div className="flex border-2 border-red-500 rounded-xl p-2">
            <h1 className="text-white bg-red-500 px-3 py-2 rounded-xl">
              Billing Address
            </h1>
            <h1 className="text-red-500 px-3 py-2 rounded-xl">
              Shipping Address
            </h1>
          </div>
          <div className="flex border-2 border-black rounded-xl px-3 py-2 items-center gap-2">
            <IoIosAddCircleOutline size={24} />
            <h1 className="text-base font-bold ">Add New</h1>
          </div>
        </div>
        <ShoppingAddresses />
        <div className="flex flex-wrap bg-[#F9FAFB] rounded-xl border-2 gap-y-4 justify-between my-10 p-4">
          <img src={payment1} alt="" className="w-[48%] px-32 bg-white rounded-lg py-3 border-2"  />
          <img src={payment2} alt="" className="w-[48%] px-32 bg-white rounded-lg py-3 border-2" />
          <img src={payment3} alt="" className="w-[48%] px-32 bg-white rounded-lg py-3 border-2" />
          <img src={payment4} alt="" className="w-[48%] px-32 bg-white rounded-lg py-3 border-2" />
        </div>
      </div>

      <ShoppingCartSummary />
    </div>
  );
}
