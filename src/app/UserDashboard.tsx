import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq from "../components/home/Faq";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import DashHero from "../components/dashboard/DashHero";

export default function UserDashboard() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <DashHero />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
