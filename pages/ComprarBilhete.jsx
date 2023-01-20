import React from "react";
export default function ComprarBilhete() {
  
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 />
              </div>
            </div>
          </div>
        </div>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <h4 style={{ color: "black" }}>
              Obrigado. O seu pedido ficou registado
            </h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="row">Pedido número:</th>
                  <th>Data:</th>
                  <th>Total:</th>
                  <th>Método de pagamento:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>81312</td>
                  <td>17-12-2022</td>
                  <td>23,00 €</td>
                  <td>Metamask Pay</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <a href="/">
                <button type="submit" className="btn btn-outline-dark">
                  Finalizar compra
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
