import contactIcon from "../../assets/icons/call.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import "../../App.css";

export default function ContactForm() {
  return (
    <div className="w-[1300px] mx-auto mb-20 flex flex-wrap justify-between">
      <div className="w-[36%]">
        <div className="">
          <h1 className="text-[#000929] text-5xl font-bold ">
            Get in Touch with Us{" "}
            <p className="pt-4 text-5xl font-bold">with Any Questions</p>
          </h1>
        </div>
        <div className="flex gap-10 p-5 shadow-xl rounded-xl mt-14 w-full bg-white">
          <img src={contactIcon} alt="" width={90} />
          <div>
            <h1 className="text-2xl text-[#000929] font-bold pb-3">
              Contact Info
            </h1>
            <p className="font-semibold text-gray-500">
              Open a chat or give us call at
            </p>
            <h1 className="font-bold text-[#000929] text-xl">+10123456789</h1>
          </div>
        </div>
        <div className=" flex gap-10 p-5 shadow-xl rounded-xl mt-5 w-full bg-white">
          <img src={emailIcon} alt="" width={90} />
          <div>
            <h1 className="text-2xl text-[#000929] font-bold pb-3">
              Send a Email
            </h1>
            <p className="font-semibold text-gray-500">Quomodosoft@gmail</p>
            <h1 className="font-bold text-[#000929] text-xl">
              abdulRahan@gmail.com
            </h1>
          </div>
        </div>
      </div>

      <form className="contact-form-bg w-[55%] p-10 bg-[#f4f4f6] rounded-lg">
        <div className="flex flex-wrap justify-between gap-y-5 mb-5">
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">First Name*</h1>
            <input
              type="text"
              placeholder="First Name"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Last Name*</h1>
            <input
              type="text"
              placeholder="Last Name"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Email Address*</h1>
            <input
              type="text"
              placeholder="Email Address"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-[48%]">
            <h1 className="font-semibold pb-2 ">Phone*</h1>
            <input
              type="text"
              placeholder="+10123456789"
              id=""
              className="p-3 border-2 rounded-xl text-sm focus:outline-none w-full"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold pb-2 ">Description*</h1>
            <textarea
              name=""
              id=""
              className="h-[200px] w-full rounded-xl focus:outline-none p-2 "
              placeholder="Type your description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-bold text-lg text-white bg-red-500 py-4 rounded-lg px-5"
          >
            Send now!
          </button>
        </div>
      </form>
    </div>
  );
}
