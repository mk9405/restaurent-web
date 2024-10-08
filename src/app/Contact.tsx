import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq from "../components/home/Faq";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
