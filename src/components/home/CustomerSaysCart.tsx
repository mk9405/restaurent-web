import { TiStarFullOutline } from "react-icons/ti";
import customer1 from "../../assets/customer-1.png";
import invert from "../../assets/icons/inverted.png";
import customerData from "../../services/offline/customer.json";

export default function CustomerSaysCart() {
  return (
    <>
      {customerData.map((d) => (
        <div className=" justify-center ">
          <div className="w-96 border-2 border-[#212529] rounded-2xl p-4  mb-10">
            <img src={invert} alt="" />
            <h1 className="text-[#f4f4f6] font-lg">
              "An absolute foodie's paradise! The flavors at ReservQ are a
              symphony of delight. Every bite tells a story of passion and
              skill. A must-visit for anyone seeking beyond compare."
            </h1>
          </div>

          <div className="flex gap-5">
            <img src={customer1} alt="" />
            <div>
              <div className="flex text-xl">
                <TiStarFullOutline color="orange" />
                <TiStarFullOutline color="orange" />
                <TiStarFullOutline color="orange" />
                <TiStarFullOutline color="orange" />
                <TiStarFullOutline color="orange" />
              </div>
              <h1 className="text-[#f4f4f6] font-bold text-2xl py-2">
                {d.name}
              </h1>
              <p className="text-[#f4f4f6] font-semibold">{d.post}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
