import "../App.css";
import logo from "../assets/icons/footer-logo-364dc9a3.svg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import gmail from "../assets/gmail.png";
import visa from "../assets/visa.png";
import american from "../assets/american express.png";
import paypal from "../assets/paypal.png";
import gpay from "../assets/gpay.png";

export default function Footer() {
  return (
    <>
      <section className="footerImg py-28 mx-auto justify-center gap-20 flex">
        <div className="">
          <img src={logo} alt="" className="pb-3" />
          <p className="text-[#f4f4f6] text-lg font-semibold w-96 pb-8">
            At ReservQ, we invite you to embark on a journey of taste and
            delight.Our tables are more than just places.
          </p>
          <div className="text-[#747681] flex text-2xl gap-4 ">
            <div className="hover:text-[#f4f4f6] bg-[#19213e] p-2 rounded-lg hover:bg-red-500 duration-500">
              <FaFacebookF />
            </div>
            <div className="hover:text-[#f4f4f6] bg-[#19213e] p-2 rounded-lg hover:bg-red-500 duration-500">
              <FaTwitter />
            </div>
            <div className="hover:text-[#f4f4f6] bg-[#19213e] p-2 rounded-lg hover:bg-red-500 duration-500">
              <FaInstagram />
            </div>
            <div className="hover:text-[#f4f4f6] bg-[#19213e] p-2 rounded-lg hover:bg-red-500 duration-500">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="text-[#f4f4f6] font-bold">
          <h1 className="text-2xl pb-5">Quick Link</h1>
          <ul>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer pb-3">
              My Account
            </li>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer pb-3">
              About Us
            </li>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer pb-3">
              Store Locator
            </li>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer pb-3">
              Delivery
            </li>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer ">
              Pickup
            </li>
          </ul>
        </div>
        <div className="text-[#f4f4f6] font-bold">
          <h1 className="text-2xl pb-5">Terms & Privacy</h1>
          <ul>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer pb-3">
              Trust & Safety
            </li>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer pb-3">
              Terms of Service
            </li>
            <li className="hover:text-red-500 duration-500 text-lg cursor-pointer pb-3">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="text-[#f4f4f6] font-bold">
          <h1 className="text-2xl pb-5">Subscribe our Newsletter</h1>
          <div className="flex gap-4 pb-10 ">
            <div className="flex gap-4 bg-[#323A54] p-4 rounded-lg overflow-hidden ">
              <img src={gmail} alt="" />
              <input
                type="email"
                placeholder="Your email"
                className="text-[#f4f4f6] font-semibold bg-[#323A54] min-w-8 focus:outline-none text-"
              />
            </div>
            <button type="submit" className="py-3 px-4 bg-red-500 rounded-lg">
              Subscribe
            </button>
          </div>
          <h1 className="text-2xl text-[#f4f4f6] font-bold pb-5">
            We Accept Payment Method
          </h1>
          <div className="flex gap-3">
            <img src={visa} alt="" />
            <img src={american} alt="" />
            <img src={paypal} alt="" />
            <img src={gpay} alt="" />
          </div>
        </div>
      </section>
      <hr className="#323A54" />
      <section className="mx-auto text-center text-[#9ea3ae] text-lg font-semibold bg-[#000929] py-4 ">
        <h1>©2023 ReservQ. All rights reserved</h1>
      </section>
    </>
  );
}
