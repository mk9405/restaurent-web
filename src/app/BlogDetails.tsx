import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq from "../components/home/Faq";
import Restaurent from "../components/home/Restaurent";
import "../App.css";
import BlogDetailsHero from "../components/blogDetails/BlogDetailsHero";

export default function BlogDetails() {
  return (
    <div className="plus-jakarta-sans">
      <Navbar />
      <BlogDetailsHero />
      <Faq />
      <Restaurent />
      <Footer />
    </div>
  );
}
