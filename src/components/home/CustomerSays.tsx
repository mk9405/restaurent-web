import CustomerSaysCart from "./CustomerSaysCart";

export default function CustomerSays() {
    return (
      <div className="mx-auto justify-center items-center bg-[#000929]">
        <div className="flex mx-auto justify-center py-14  ">
          <h1 className="font-bold text-5xl text-white">What's Our Customer Say</h1>
        </div>
        <CustomerSaysCart />
      </div>
    );
  }