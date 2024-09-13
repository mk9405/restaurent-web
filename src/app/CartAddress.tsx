import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import CartAddressHero from "../components/cartAddress/CartAddressHero";
import ShoppingCartAddressView from "../components/cartAddress/ShoppingCartAddressView";

export default function CartAddress() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <CartAddressHero />
      <ShoppingCartAddressView />
      <Restaurent />
      <Footer />
    </div>
  );
}
