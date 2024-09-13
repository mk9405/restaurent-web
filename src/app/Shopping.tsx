import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Restaurent from "../components/home/Restaurent";
import ShoppingHero from "../components/shopping/shoppingHero";
import "../App.css";
import ShoppingCart from "../components/shopping/ShoppingCart";

export default function Shopping() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <ShoppingHero />
      <ShoppingCart />
      <Restaurent />
      <Footer />
    </div>
  );
}
