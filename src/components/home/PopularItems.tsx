import FoodCart from "./FoodCart";

export default function PopularItems() {
  return (
    <div className="max-w-[1300px] mx-auto py-20 max-sm:w-full">
      <div className="flex pb-14 max-sm:pb-10">
        <h1 className="font-bold text-5xl max-sm:text-3xl max-sm:mx-auto text-left">Most Popular Items</h1>
      </div>
      <div className="flex flex-wrap justify-between gap-y-6">
        <FoodCart />
      </div>
    </div>
  );
} 
