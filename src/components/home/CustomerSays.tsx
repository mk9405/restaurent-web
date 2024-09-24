import CustomerSaysCart from "./CustomerSaysCart";

export default function CustomerSays() {
  return (
    <div className="mx-auto justify-center items-center bg-[#000929] py-20  max-sm:px-10">
      <div className="flex mx-auto justify-center pb-14  ">
        <h1 className="font-bold text-5xl max-sm:text-3xl text-white">
          What's Our Customer Say
        </h1>
      </div>
      <div className="flex flex-wrap  mx-auto justify-center gap-12">
        <CustomerSaysCart />
      </div>
    </div>
  );
}
