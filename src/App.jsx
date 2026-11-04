import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./assets/components/Hero";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Technologies from "./assets/components/Technologies";
import FAQ from "./assets/components/FAQ";
import { Suspense } from "react";
import Loading from "./assets/components/Loading";

export default function App() {
  return (
    <>
      <Header />
      <div className="w-11/12 mx-auto">
        <Hero />
        <Suspense fallback={<Loading />}>
          <Technologies />
        </Suspense>
        <FAQ />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </>
  );
}
