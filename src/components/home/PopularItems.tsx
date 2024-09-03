import FoodCart from "./FoodCart";

export default function PopularItems() {
  return (
    <div className="max-w-[1300px] mx-auto py-20">
      <div className="flex pb-14">
        <h1 className="font-bold text-5xl text-left">Most Popular Items</h1>
      </div>
      <div className="flex flex-wrap justify-between gap-y-6">
        <FoodCart />
      </div>
    </div>
  );
} 
