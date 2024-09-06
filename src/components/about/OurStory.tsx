import about from "../../assets/about-thumb-5129ac84.png";
import customer from "../../assets/customer icon.png";
import branch from "../../assets/branch icon.png";

export default function OurStory() {
  return (
    <div className="w-[1300px] mx-auto pb-20 flex justify-between">
      <img src={about} alt="" />
      <div className="w-[48%] pt-20">
        <h1 className="text-[#000929] text-5xl font-bold ">
          Our Story of food Culinary{" "}
          <p className="pt-4 text-5xl font-bold">Excellence at Restaurent</p>
        </h1>
        <p className="text-[#4d5461] font-semibold text-base pt-10 ">
          There are many variations of passages of Lorem Ipsum available, but
          the to a majority have suffered alteration in some form, by injected
          humour, or find randomised words which don't look even slightly
          believable.
        </p>
        <p className="text-[#4d5461] font-semibold text-base pt-5 italic ">
          Over 20 years’ experience providing top quality house Booking rant and
          sell for your Amazing Dream & Make you Happy
        </p>
        <div className="mt-10 flex justify-between">
          <div>
            <img src={customer} alt="" />
            <h1 className="text-2xl font-bold pt-4">90k+ Customers</h1>
            <h1 className="text-gray-400 font-semibold pt-2 text-lg">Believe in our service & care</h1>
          </div>
          <div>
            <img src={branch} alt="" />
            <h1 className="text-2xl font-bold pt-4">100+ Branch</h1>
            <h1 className="text-gray-400 font-semibold pt-2 text-lg">Food Ready for occupancy</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
