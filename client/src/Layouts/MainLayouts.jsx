import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function MainLayouts() {
  return (
    <div className="color">
        <nav>
            <Navbar/>
        </nav>
        
        <Outlet/>
        
   

     
    </div>
  );
}

export default MainLayouts;
