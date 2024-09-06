export default function EditProfile() {
  return (
    <div className="flex-1 ">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 font-semibold py-3">Let's check your today</p>
      <form className="p-10 bg-[#f4f4f6] rounded-lg">
        <div className="border-2 rounded-lg p-3 bg-white mb-5">
          <input type="file" name="" id="" />
        </div>
        <div className="flex flex-wrap justify-between gap-y-5 mb-5">
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">First Name</h1>
            <input
              type="text"
              placeholder="First Name"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Last Name</h1>
            <input
              type="text"
              placeholder="Last Name"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Email Address</h1>
            <input
              type="text"
              placeholder="Email Address"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Phone</h1>
            <input
              type="text"
              placeholder="+10123456789"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Country</h1>
            <select
              name=""
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            >
              <option value="">Bangladesh</option>
              <option value="">India</option>
              <option value="">Usa</option>
            </select>
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">State</h1>
            <select
              name=""
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            >
              <option value="">State</option>
              <option value="">India</option>
              <option value="">Usa</option>
            </select>
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">City</h1>
            <select
              name=""
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            >
              <option value="">City</option>
              <option value="">India</option>
              <option value="">Usa</option>
            </select>
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Address</h1>
            <input
              type="text"
              placeholder="Address"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2 ">
              <input type="checkbox" name="" id="" className="size-6" />
              <h1 className="text-lg font-semibold">Home</h1>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" name="" id="" className="size-6"/>
              <h1 className="text-lg font-semibold">Office</h1>
            </div>
          </div>
          <button type="submit" className="font-bold text-lg text-white bg-red-500 py-3 rounded-lg px-14">Save now</button>
        </div>
      </form>
    </div>
  );
}
