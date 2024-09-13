import { Route, Routes } from "react-router-dom";
import Menu from "../app/Menu";
import Blog from "../app/Blog";
import About from "../app/About";
import Privacy from "../app/Privacy";
import Contact from "../app/Contact";
import Homepage from "../app/homepage";
import Shopping from "../app/Shopping";
import BlogDetails from "../app/BlogDetails";
import FoodDetails from "../app/FoodDetails";
import CartAddress from "../app/CartAddress";
import UserDashboard from "../app/UserDashboard";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/food-details" element={<FoodDetails />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/cart-address" element={<CartAddress />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default Root;
