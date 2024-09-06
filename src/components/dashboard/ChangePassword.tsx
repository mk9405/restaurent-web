export default function ChangePassword() {
  return (
    <div className="flex-1 ">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 font-semibold py-3">Let's check your today</p>
      <form action="">
        <div className="bg-[#f4f4f6] p-5 rounded-xl">
          <div className="w-full pb-5">
            <h1 className="font-semibold pb-2 ">Current Password</h1>
            <input
              type="text"
              placeholder="Type Your Password"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="flex justify-between pb-10">
            <div className="w-[48%]">
              <h1 className="font-semibold pb-2 ">New Password</h1>
              <input
                type="text"
                placeholder="Type Your Password"
                id=""
                className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
              />
            </div>
            <div className="w-[48%]">
              <h1 className="font-semibold pb-2 ">Confirm Password</h1>
              <input
                type="text"
                placeholder="Confirm Password"
                id=""
                className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="font-bold text-lg text-white bg-red-500 py-3 rounded-lg px-10"
          >
            Save now
          </button>
        </div>
      </form>
    </div>
  );
}
