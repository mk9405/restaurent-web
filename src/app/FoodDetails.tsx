import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import { RecentOrderFoodCart } from "../components/home/FoodCart";
import FoodDetailsHero from "../components/foodDetails/FoodDetailsHero";
import FoodDetailsView from "../components/foodDetails/FoodDetails";

export default function FoodDetails() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <FoodDetailsHero />
      <FoodDetailsView />
      <RecentOrderFoodCart />
      <Restaurent />
      <Footer />
    </div>
  );
}
