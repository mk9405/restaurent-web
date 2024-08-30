import "../../app/Hero/style.css";
import restaurentImg from "../../assets/restaurant.png";
import googleplay from "../../assets/google play.png";
import appstore from "../../assets/app store.png";

export default function Restaurent() {
  return (
    <div className="restaurent flex p-20 justify-center">
      <div>
        <h1 className="font-bold text-5xl text-white pb-4">
          Find out Better Restaurant
        </h1>
        <h1 className="font-bold text-5xl text-white">Food Experience</h1>
        <p className="text-[#e5e6eb] font-semibold py-12">
          We've done it carefully and simply. Combined with the <br />{" "}
          ingredients makes for beautiful landings.
        </p>
        <div className="flex gap-10">
          <button className="flex items-center gap-2 py-3 px-8 bg-white rounded-full font-bold text-lg">
            <img src={googleplay} alt="" />
            Google Play
          </button>
          <button className="flex items-center gap-2 py-3 px-8 bg-black rounded-full font-bold text-lg text-white">
            <img src={appstore} alt="" />
            App Store
          </button>
        </div>
      </div>
      <div className=" translate-y-16">
        <img src={restaurentImg} alt="" width={700} />
      </div>
    </div>
  );
}
