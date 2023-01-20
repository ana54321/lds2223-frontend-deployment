import React from "react";

export default function AdminLocaisEventos() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-9 text-center">
                  <h2>Todos Os Locais De Eventos</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card mb-3 mt-3">
              <div className="card-body"></div>
              <div className="container">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }} scope="col">
                        Local de Evento
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        Localidade
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        Código Postal
                      </th>
                      <th style={{ textAlign: "center" }} scope="col">
                        Cidade
                      </th>
                      <th scope="col">Ocultar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "center" }}>Altice Arena</td>
                      <td style={{ textAlign: "center" }}>
                        Rossio dos Olivais
                      </td>
                      <td style={{ textAlign: "center" }}>1990-231</td>
                      <td style={{ textAlign: "center" }}>Lisboa</td>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center" }}>Estádio do Dragão</td>
                      <td style={{ textAlign: "center" }}>
                        Via Futebol Clube do Porto
                      </td>
                      <td style={{ textAlign: "center" }}>4350-415</td>
                      <td style={{ textAlign: "center" }}>Porto</td>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center" }}>
                        Altice Forum Braga
                      </td>
                      <td style={{ textAlign: "center" }}>
                        R. Monsenhor Airosa
                      </td>
                      <td style={{ textAlign: "center" }}>4705-002</td>
                      <td style={{ textAlign: "center" }}>Braga</td>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center" }}>Super Bock Arena</td>
                      <td style={{ textAlign: "center" }}>
                        Jardins do Palácio de Cristal, R. de Dom Manuel II
                      </td>
                      <td style={{ textAlign: "center" }}>4050-346</td>
                      <td style={{ textAlign: "center" }}>Porto</td>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center" }}>Casa da Musica</td>
                      <td style={{ textAlign: "center" }}>
                        Av. da Boavista 604-610
                      </td>
                      <td style={{ textAlign: "center" }}>4149-071</td>
                      <td style={{ textAlign: "center" }}>Porto</td>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "center" }}>
                        Multiusos de Guimarães
                      </td>
                      <td style={{ textAlign: "center" }}>
                        Alameda Cidade de Lisboa 481
                      </td>
                      <td style={{ textAlign: "center" }}>-</td>
                      <td style={{ textAlign: "center" }}>Guimarães</td>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
