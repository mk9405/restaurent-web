import { Route, Routes } from "react-router-dom";
import Homepage from "../app/homepage";
import UserDashboard from "../app/UserDashboard";


function Root() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default Root;