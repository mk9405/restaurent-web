import { useState } from "react";
import Image from "../assets/icons/footer-logo-364dc9a3.svg";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SlHeart } from "react-icons/sl";
import { BsCartPlus } from "react-icons/bs";
import "../App.css";

const Nav = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <nav className="max-w-[1300px] flex justify-between  items-center mx-auto py-4 max-sm:px-4 ">
          <div>
            <img src={Image} className="cursor-pointer" alt="" />
          </div>
          <div className="flex gap-5 py-4 max-md:hidden ">
            <Link to="/" className="line">
              <div className="flex text-white font-semibold ">
                Home <MdOutlineKeyboardArrowDown className="mt-0.5" size={20} />
              </div>
            </Link>

            <Link to="/menu" className="line">
              Menu
            </Link>
            <div className="dropdown">
              <div className="flex text-white">
                Page
                <MdOutlineKeyboardArrowDown className="mt-0.5" size={20} />
              </div>
              <div className="dropdown-content">
                <div>
                  <Link to="/about" className="line mb-2">
                    <h1>About us</h1>
                  </Link>
                </div>
                <div>
                  <Link to="/contact" className="line mb-2">
                    <h1>Contact us</h1>
                  </Link>
                </div>
                <div>
                  <Link to="/blog" className="line mb-2">
                    <h1>Blog</h1>
                  </Link>
                </div>
                <div>
                  <Link to="/blog-details" className="line mb-2">
                    <h1>Blog Details</h1>
                  </Link>
                </div>
                <div>
                  <Link to="/food-details" className="line mb-2">
                    <h1>Food Details</h1>
                  </Link>
                </div>
                <div>
                  <Link to="/shopping" className="line mb-2">
                    <h1>Shopping Cart</h1>
                  </Link>
                </div>
                <div>
                  <Link to="/cart-address" className="line mb-2">
                    <h1>Cart Address</h1>
                  </Link>
                </div>
                <div>
                  <Link to="/privacy" className="line">
                    <h1>Privacy & Policy</h1>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/user-dashboard" className="line">
              UserDashboard
            </Link>
          </div>
          <div className="flex max-sm:hidden  min-w-28 items-center bg-[#394150] rounded-lg border-[1px] border-[#6c727f]">
            <input
              type="search"
              placeholder="Search food"
              className=" outline-none bg-[#394150] px-2 py-3 caret-white text-white"
            />
            <CiSearch
              size={30}
              color={"#6c727f"}
              className="mr-4 cursor-pointer"
            />
          </div>
          <div className="flex gap-5 max-sm:hidden">
            <div className="edit1 border-[1px] bg-[#394150] p-4 border-[#6c727f] rounded-full hover:bg-[#f01543] duration-300 cursor-pointer">
              <span
                className="absolute bg-[#f01543] text-white rounded-full px-[6px] py-[0.5px] text-[12px] font-bold translate-x-6 translate-y-[-15px]"
                id="one"
              >
                8
              </span>
              <SlHeart size={24} color={"#fff"} className="cursor-pointer" />
            </div>
            <div className="edit2 border-[1px] p-4 bg-[#394150] border-[#6c727f] rounded-full hover:bg-[#f01543] duration-300 cursor-pointer">
              <span
                className="absolute bg-[#f01543] text-white rounded-full px-[6px] py-[0.5px] text-[12px] font-bold translate-x-6 translate-y-[-15px]"
                id="two"
              >
                3
              </span>
              <BsCartPlus size={25} color={"#fff"} className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-5">
            <button className=" bg-[#f01543] px-6 text-white font-semibold rounded-xl">
              Log In
            </button>
            <button
              className=" bg-white px-6 py-3 text-white rounded-xl font-semibold"
              id="btn"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
