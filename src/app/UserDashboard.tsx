import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq from "../components/home/Faq";
import Restaurent from "../components/home/Restaurent";
import DashHero from "../components/dashboard/DashHero";
import "../App.css";
import UserDetails from "../components/dashboard/userDetails";

export default function UserDashboard() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <DashHero />
      <UserDetails />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
