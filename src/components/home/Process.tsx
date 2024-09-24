import processImg from "../../assets/process-themb.png";

export default function ProcessCraft() {
  return (
    <div className="bg-[#000929] flex flex-wrap max-sm:w-full max-sm:px-10 py-20 gap-10">
      <img src={processImg} alt="" className="-left-10"/>
      <div className="text-white flex-1 max-sm:w-full text-5xl max-sm:text-3xl font-bold gap-10">
        <h1 className="pb-4">The Process of Crafting your </h1>
        <h1 className="pb-10"> Dining Experience</h1>
        <div className="p-5 bg-[#0d1634] rounded-xl my-10 w-[550px] max-sm:w-full ">
            <h1 className="text-2xl pb-3">Set your location</h1>
            <p>A high quality solution beautifully food for customer</p>
        </div>
        <div className="p-5 bg-[#0d1634] rounded-xl my-10 w-[550px] max-sm:w-full">
            <h1 className="text-2xl pb-3">Select Food</h1>
            <p>A high quality solution beautifully food for customer</p>
        </div>
        <div className="p-5 bg-[#0d1634] rounded-xl my-10 w-[550px] max-sm:w-full">
            <h1 className="text-2xl pb-3">Pay Cash or Online</h1>
            <p>A high quality solution beautifully food for customer</p>
        </div>
        <div className="p-5 bg-[#0d1634] rounded-xl my-10 w-[550px] max-sm:w-full">
            <h1 className="text-2xl pb-3">Delivery or Pickup</h1>
            <p>A high quality solution beautifully food for customer</p>
        </div>
      </div>
    </div>
  );
}
