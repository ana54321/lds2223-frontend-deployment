import React from "react";

export default function AdminEventos() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-9 text-center">
                  <h2>Todos Os Eventos</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card mb-3 mt-3">
              <div className="card-body">
                <div className="row mb-3"></div>
                <div className="row mb-3"></div>
                <div className="d-flex align-items-center justify-content-center">
                  <table id="table" className="table table-hover">
                    <thead>
                      <tr>
                        <th style={{ textAlign: "center" }} scope="col">
                          Evento
                        </th>
                        <th style={{ textAlign: "center" }} scope="col">
                          Data do Evento
                        </th>
                        <th style={{ textAlign: "center" }} scope="col">
                          Hora do Evento
                        </th>
                        <th scope="col">Ocultar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          Trair e Coçar é só começar
                        </td>
                        <td style={{ textAlign: "center" }}>12/11/2022</td>
                        <td style={{ textAlign: "center" }}>21:30h</td>
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
                          Luís de Matos | Impossível ao vivo
                        </td>
                        <td style={{ textAlign: "center" }}>04/11/2022</td>
                        <td style={{ textAlign: "center" }}>22:15h</td>
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
                          Cirque du Soleil | Crystal
                        </td>
                        <td style={{ textAlign: "center" }}>23/10/2022</td>
                        <td style={{ textAlign: "center" }}>14:00h</td>
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
                          Commedia a la Carte | Do nada
                        </td>
                        <td style={{ textAlign: "center" }}>20/10/2022</td>
                        <td style={{ textAlign: "center" }}>20:00h</td>
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
                          O Alfaite de Odessa | Um milagre de Natal
                        </td>
                        <td style={{ textAlign: "center" }}>01/10/2022</td>
                        <td style={{ textAlign: "center" }}>21:00h</td>
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
                          Discoveries Festival | 2022
                        </td>
                        <td style={{ textAlign: "center" }}>24/03/2022</td>
                        <td style={{ textAlign: "center" }}>17:00h</td>
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
        </div>
      </main>
    </>
  );
}
