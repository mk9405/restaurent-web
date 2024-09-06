import { TiStarFullOutline } from "react-icons/ti";
import review from "../../services/offline/review.json";

export default function Reviews() {
  return (
    <div className="flex-1 ">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 font-semibold py-3">Let's check your today</p>
      <div className="bg-[#f4f4f6] p-5 rounded-xl">
        <div className="flex items-center justify-between pb-5">
          <h1 className="font-bold text-2xl">Review List</h1>
        </div>
        {review.map((d) => (
          <div className="bg-white mb-5 p-4 rounded-xl">
            <h1 className="font-bold text-lg pb-2">{d.title}</h1>
            <p className="text-base italic text-gray-600 pb-2">{d.disc}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 py-2">
                <div className="w-14 h-14 bg-gray-400 overflow-hidden rounded-full"></div>
                <div>
                  <h1 className="font-semibold text-lg">{d.name}</h1>
                  <h1 className="text-sm font-semibold text-gray-500">{d.desgn}</h1>
                </div>
              </div>
              <div>
                <div className="flex">
                  <TiStarFullOutline color="orange" size={24} />
                  <TiStarFullOutline color="orange" size={24} />
                  <TiStarFullOutline color="orange" size={24} />
                  <TiStarFullOutline color="orange" size={24} />
                  <TiStarFullOutline color="orange" size={24} />
                </div>
                <p className="text-base text-red-500 font-semibold">{d.time}</p>
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="font-bold text-white bg-red-500 py-4 px-10 text-xl rounded-xl">See All</button>
      </div>
    </div>
  );
}
