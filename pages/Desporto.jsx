import React from "react";

export default function Desporto() {
  return (
    <>
      <main id="main"></main>
      <div className="breadcrumbs">
        <div
          className="page-header d-flex align-items-center"
          style={{ backgroundImage: 'url("img/desporto.jpg")' }}
        >
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Desporto</h2>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Título</th>
                    <th scope="col">Local</th>
                    <th scope="col">Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">DEZ 28</th>
                    <td>LIGA PORTUGAL BWIN | PORTIMONENSE - CASA PIA AC</td>
                    <td>Estádio Municipal De Portimão</td>
                    <td>
                      <a href="/DetalhesDesporto">
                        <button type="button" className="btn btn-outline-dark">
                          +info
                        </button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DEZ 29</th>
                    <td>LIGA PORTUGAL BWIN | GIL VICENTE FC - SANTA CLARA</td>
                    <td>Estádio Cidade De Barcelos</td>
                    <td>
                      <a href="/DetalhesDesporto">
                        <button type="button" className="btn btn-outline-dark">
                          +info
                        </button>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DEZ 30</th>
                    <td>LIGA PORTUGAL BWIN | SC BRAGA - SL BENFICA</td>
                    <td>Estádio Municipal De Braga</td>
                    <td>
                      <a href="/DetalhesDesporto">
                        <button type="button" className="btn btn-outline-dark">
                          +info
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </ol>
          </div>
        </nav>
      </div>
    </>
  );
}
