import { WhislistCart } from "../home/FoodCart";

export default function Whislist() {
    return (
      <div className="flex-1 ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 font-semibold py-3">Let's check your today</p>
        <div className="flex flex-wrap justify-between gap-y-5">
          <WhislistCart />
        </div>
      </div>
    );
  }