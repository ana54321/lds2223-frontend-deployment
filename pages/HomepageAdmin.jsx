import HeaderAdmin from "./HeaderAdmin";
import Hero from "./Hero";
import MainHomepage from "./MainHomepage";
import Footer from "./Footer";
import React from "react";

export default function HomepageAdmin() {
  return (
    <>
      <HeaderAdmin />
      <Hero />
      <MainHomepage />
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      <i className="bi bi-arrow-up-short">
        <div id="preloader"></div>
      </i>

      <Footer />
    </>
  );
}
