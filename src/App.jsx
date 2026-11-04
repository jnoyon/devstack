import React from "react";
import { ToastContainer } from "react-toastify/unstyled";
import Hero from "./assets/components/Hero";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Technologies from "./assets/components/Technologies";

export default function App() {
  return (
    <>
      <Header />
      <div className="w-11/12 mx-auto">
        <Hero />
        <Technologies />
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
