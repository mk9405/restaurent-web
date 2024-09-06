import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq from "../components/home/Faq";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import MenuHero from "../components/menu/MenuHero";
import FoodDetails from "../components/menu/FoodDetails";

export default function Menu() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <MenuHero />
      <FoodDetails />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
