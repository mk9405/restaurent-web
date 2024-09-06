import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CustomerSays from "../components/home/CustomerSays";
import Faq from "../components/home/Faq";
import PopularItems from "../components/home/PopularItems";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import ProcessCraft from "../components/home/Process";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";

export default function About() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <AboutHero />
      <OurStory />
      <ProcessCraft />
      <PopularItems />
      <CustomerSays />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
