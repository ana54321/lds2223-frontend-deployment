import React, { useState } from "react";

export default function EscolherLugar() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
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
        <section>
          <div className="container" data-aos="fade-up">
            <h3 style={{ color: "black" }}>Escolha dos Lugares</h3>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">SECÇÃO</th>
                  <th scope="col">FILA</th>
                  <th scope="col">LUGAR</th>
                  <th scope="col">PREÇO</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Secção 3</td>
                  <td>Fila 13</td>
                  <td>Lugar 21</td>
                  <td>30,00 €</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button onClick={handleDecrement} className="quantity-left-minus btn btn-danger btn-number"><i className="fa fa-minus" /></button>
                      <span className="quantity-field border-0 text-center w-50">{quantity}</span>
                      <button onClick={handleIncrement} className="quantity-right-plus btn btn-success btn-number"><i className="fa fa-plus" /></button>
                    </div>
                    
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <a href="/ComprarBilhete">
                <button type="button" className="btn btn-outline-dark">
                  Comprar
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
