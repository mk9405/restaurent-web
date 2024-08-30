import { Route, Routes } from "react-router-dom";
import Homepage from "../app/homepage";


function Root() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default Root;