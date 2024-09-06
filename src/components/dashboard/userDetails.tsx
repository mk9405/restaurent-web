import UserDashboard from "../../services/offline/userDashboard.json";
import dashImg from "../../assets/icons/dashboard-menu.png";
import { useState } from "react";
import EditProfile from "./EditProfile";
import Address from "./Address";
import Order from "./Order";
import Whislist from "./Whislist";
import Reviews from "./Reviews";
import ChangePassword from "./ChangePassword";
import Logout from "./Logout";

export default function UserDetails() {
  const [accordian, setAccordian] = useState(0);

  const toggleAccordian = (i: number) => {
    if (accordian === i) {
      setAccordian(0);
    } else {
      setAccordian(i);
    }
  };
  return (
    <div className="w-[1300px] mx-auto flex gap-6 mb-20 ">
      <section className="w-[300px] bg-[#f4f4f6] py-6 pb-20 rounded-xl ">
        <div className="text-center justify-center w-full border-b-2 pb-4">
          <div className="w-24 h-24 rounded-full bg-gray-300 mx-24 my-2">
            <img src={dashImg} alt="" />
          </div>
          <h1 className="font-bold text-2xl">David Warrior</h1>
          <h1 className="font-semibold text-gray-500">user id: #054501</h1>
        </div>
        {UserDashboard.map((d, i) => (
          <div
            key={i}
            onClick={() => toggleAccordian(i)}
            className="flex items-center gap-2 py-2 px-4 border-b-2 cursor-pointer"
          >
            <div
              className={
                accordian === i
                  ? "w-12 h-12 bg-red-500 rounded-full"
                  : "w-12 h-12 bg-red-200 rounded-full"
              }
            ></div>
            <h1
              className={
                accordian === i
                  ? "font-semibold text-red-500 text-lg "
                  : "font-semibold text-lg "
              }
            >
              {d.title}
            </h1>
          </div>
        ))}
      </section>
      {accordian === 0 ? <EditProfile /> : null}
      {accordian === 1 ? <Address /> : null}
      {accordian === 2 ? <Order /> : null}
      {accordian === 3 ? <Whislist /> : null}
      {accordian === 4 ? <Reviews /> : null}
      {accordian === 5 ? <ChangePassword /> : null}
      {accordian === 6 ? <Logout /> : null}
    </div>
  );
}
