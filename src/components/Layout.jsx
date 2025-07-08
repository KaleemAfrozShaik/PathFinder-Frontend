import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout component wraps all pages with Navbar and Footer
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;