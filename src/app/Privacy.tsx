import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import PrivacyHero from "../components/privacy/PrivacyHero";

export default function Privacy() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <PrivacyHero />
      <Restaurent />
      <Footer />
    </div>
  );
}
