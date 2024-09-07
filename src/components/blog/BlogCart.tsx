import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import newsImg from "../../assets/news-1.png";
import blogcart from "../../services/offline/blogCart.json";

export default function BlogCart() {
  return (
    <div className="w-[1300px] mx-auto flex flex-wrap justify-between gap-y-4 mb-20">
      {blogcart.map((d) => (
        <div className="relative group">
          <div className="absolute bottom-0 text-white p-4 z-20">
            <div className="flex text-base gap-2">
              <p>{d.category}</p>
              <p>{d.time}</p>
            </div>
            <h1 className="text-2xl font-bold pb-3 group-hover:text-red-500 duration-500">
              {d.title}
            </h1>
            <p className="text-base flex items-center gap-1 group-hover:text-red-500 duration-500">
              {d.btn} <FaLongArrowAltRight />
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={newsImg}
              alt=""
              className=" group-hover:scale-110 duration-500 "
            />
          </div>
        </div>
      ))}
      <div className="flex mt-10 items-center gap-5 justify-center w-full ">
        <div className="p-4 border-2 rounded-lg bg-white text-[red] border-[red] ">
          <FaLongArrowAltLeft />
        </div>
        <button
          type="submit"
          className="flex items-center gap-1 font-semibold text-lg text-white bg-red-500 py-3 rounded-lg px-4 "
        >
          Next Page
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}
