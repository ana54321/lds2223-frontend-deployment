import React from "react";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">VAMOS FAZER A VIDA ACONTECER</h2>
              <form
                action="#"
                className="form-search d-flex align-items-stretch mb-3"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Procurar bilhetes por artista, evento ou local"
                />
                <button type="submit" className="btn btn-dark">
                  Procurar
                </button>
              </form>
              <div
                className="row gy-4"
                data-aos="fade-up"
                data-aos-delay={400}
              ></div>
            </div>
            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img src="img/ticket.png" className="img-fluid mb-3 mb-lg-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
