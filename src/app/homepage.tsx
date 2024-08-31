import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Category from "../components/home/Category";
import CustomerSays from "../components/home/CustomerSays";
import Faq from "../components/home/Faq";
import PopularItems from "../components/home/PopularItems";
import Restaurent from "../components/home/Restaurent";
import Hero from "./Hero/Hero";
import "../App.css"

export default function Homepage() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <Hero />
      <Category />
      <PopularItems />
      <CustomerSays />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
