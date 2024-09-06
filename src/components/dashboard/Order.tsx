import { PiEyeFill } from "react-icons/pi";
import order from "../../services/offline/order.json";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Order() {
  return (
    <div className="flex-1 ">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 font-semibold py-3">Let's check your today</p>
      <div className="bg-[#f4f4f6] p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Order & Reordering</h1>
          <div className="border-2 p-2 rounded-xl border-gray-400 text-gray-400 text-sm">
            <h1>Last week</h1>
          </div>
        </div>
        <div className="flex py-4 border-b-2 text-[#394150] font-bold text-lg">
          <h1 className="w-[340px]">Food Name</h1>
          <h1 className="w-[210px]">Date</h1>
          <h1 className="w-[140px]">Amount</h1>
          <h1 className="w-[180px]">Status</h1>
          <h1>Action</h1>
        </div>
        {order.map((d) => (
          <div key={d.id} className="flex justify-between py-4 border-b-2 text-[#394150] font-semibold text-lg">
            <h1>{d.name}</h1>
            <h1>{d.date}</h1>
            <h1>{d.amount}</h1>
            <h1 className="text-[#22c55e] bg-[#E4F0EA] py-1 px-2 rounded-lg">
              {d.status}
            </h1>
            <div className="p-2 bg-black text-white rounded-lg">
              <PiEyeFill />
            </div>
          </div>
        ))}
        <div className="flex mt-10 items-center gap-5 justify-center ">
          <div className="p-4 border-2 rounded-lg bg-white text-[red] border-[red] ">
            <FaLongArrowAltLeft />
          </div>
          <button
            type="submit"
            className="flex items-center gap-1 font-semibold text-lg text-white bg-red-500 py-3 rounded-lg px-4 "
          >
            Next Page
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
}
