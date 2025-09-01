import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
