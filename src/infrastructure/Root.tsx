import { Route, Routes } from "react-router-dom";
import Homepage from "../app/homepage";
import UserDashboard from "../app/UserDashboard";
import Menu from "../app/Menu";
import Contact from "../app/Contact";
import About from "../app/About";
import Privacy from "../app/Privacy";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default Root;
