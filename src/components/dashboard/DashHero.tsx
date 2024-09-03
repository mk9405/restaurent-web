import { IoIosArrowForward } from "react-icons/io";
import "../../App.css";

export default function DashHero() {
  return (
    <div className="inner-bg w-full -translate-y-36">
      <h1 className="w-full items-center text-center top-[50%] text-5xl font-bold   text-white absolute ">
        User Dashboard
        <div className="flex justify-center items-center gap-2 text-lg py-2">
          <h1 className="">Home</h1>
          <IoIosArrowForward />
          <h1 className="">User Dashboard</h1>
        </div>
      </h1>
    </div>
  );
}
