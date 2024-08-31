import FoodCart from "./FoodCart";

export default function PopularItems() {
  return (
    <div className="mx-auto justify-center items-center py-20">
      <div className="flex mx-auto justify-center pb-14  ">
        <h1 className="font-bold text-5xl">Most Popular Items</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <FoodCart />
      </div>
    </div>
  );
} 
