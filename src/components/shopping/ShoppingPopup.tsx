import { MdOutlineAddShoppingCart } from "react-icons/md";
import featureImg from "../../assets/featured-1.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import boughtFood from "../../services/offline/boughtFood.json";
import { IoCloseCircleSharp } from "react-icons/io5";

interface proptype {
  togglePopupClose: () => void;
}

export default function ShoppingPopup({ togglePopupClose }: proptype) {
  return (
    <div className="w-[450px] bg-white p-4 absolute top-full left-[50%] z-30 rounded-xl ">
      <div className="flex justify-between w-[90%] items-center absolute z-20 ">
        <div className="flex text-white bg-black backdrop-blur-sm p-2 m-2 rounded-xl font-bold ">
          4.7(2.5k)
        </div>
        <div className="cursor-pointer" onClick={togglePopupClose}>
          <IoCloseCircleSharp size={30} color="white" />
        </div>
      </div>
      <img src={featureImg} alt="" />
      <div className="border-b-2 flex justify-between px-2 py-2 items-center">
        <h1 className="text-2xl font-bold py-2 ">Eggplant Baked with Cheese</h1>
        <p className="text-2xl text-red-500 font-bold ">$30</p>
      </div>
      <h1 className="font-bold pt-4 text-lg flex gap-2">
        Select Addon <p className="text-gray-400">(Optional)</p>{" "}
      </h1>

      {boughtFood.map((d) => (
        <div className="flex  justify-between items-center rounded-xl p-2 bg-white">
          <div className="flex gap-4">
            <input type="checkbox" name="" id="" className="w-10" />
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
        <div>
          <h1 className="font-bold text-lg pb-2">Select Quantity</h1>
          <div className="flex gap-4 items-center font-bold border-2 p-2 rounded-xl border-red-200 ">
            <div className="p-3 bg-red-100 rounded-md">
              <FaMinus color="red" />
            </div>
            1
            <div className="p-3 bg-red-500 rounded-md">
              <FaPlus color="white" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg pb-2">Select Size</h1>
          <div className="bg-black text-white p-4 rounded-xl font-bold ">
            <h1>Variention Size</h1>
          </div>
        </div>
      </div>
      <div className="pr-4">
        <button
          type="submit"
          className="w-[96%] p-4 m-4 justify-center border-2 rounded-lg font-semibold flex items-center gap-2 text-white bg-red-500"
        >
          <MdOutlineAddShoppingCart />
          Add To Cart
        </button>
      </div>
    </div>
  );
}
