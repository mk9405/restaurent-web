import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq from "../components/home/Faq";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import BlogHero from "../components/blog/BlogHero";

export default function Blog() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <BlogHero />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
