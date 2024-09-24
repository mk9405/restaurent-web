import "../../app/Hero/style.css";
import restaurentImg from "../../assets/restaurant.png";
import googleplay from "../../assets/google play.png";
import appstore from "../../assets/app store.png";

export default function Restaurent() {
  return (
    <div className="restaurent flex max-sm:flex-col p-20 max-sm:p-10 justify-center">
      <div>
        <h1 className="font-bold text-5xl max-sm:text-3xl text-white pb-4">
          Find out Better Restaurant
        </h1>
        <h1 className="font-bold text-5xl max-sm:text-3xl text-white">Food Experience</h1>
        <p className="text-[#e5e6eb] font-semibold py-12">
          We've done it carefully and simply. Combined with the <br />{" "}
          ingredients makes for beautiful landings.
        </p>
        <div className="flex max-sm:flex-col gap-10 max-sm:w-full">
          <button className="flex items-center gap-2 py-3 px-8 max-sm:mx-auto bg-white rounded-full font-bold text-lg">
            <img src={googleplay} alt="" />
            Google Play
          </button>
          <button className="flex items-center gap-2 py-3 px-8 max-sm:mx-auto bg-black rounded-full font-bold text-lg text-white">
            <img src={appstore} alt="" />
            App Store
          </button>
        </div>
      </div>
      <div className=" translate-y-16 max-sm:hidden">
        <img src={restaurentImg} alt="" width={700} />
      </div>
    </div>
  );
}
