import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className='actualApp'>
      <div className="top">
        <Navbar />
      </div>
      <div className="bottom">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
