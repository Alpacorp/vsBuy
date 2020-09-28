import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "../pages/Register";
import "../assets/styles/global.css";

const Layout = ({ children }) => (
  <div>
    <Header />
    <Register />
    {children}
    <Footer />
  </div>
);

export default Layout;
