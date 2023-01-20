import React from "react";

export default function HistoricoBilhetes() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Gestão</h2>
              </div>
              <div className="container">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h3 style={{ color: "black" }} className="text-center">
                        Histórico de Bilhetes
                      </h3>
                    </div>
                    <div className="row mb-3" />
                    <div className="row mb-3" />
                    <div className="d-flex align-items-center justify-content-center">
                      <table id="table" className="table table-hover">
                        <thead>
                          <tr>
                            <th style={{ textAlign: "center" }} scope="col">
                              Título
                            </th>
                            <th style={{ textAlign: "center" }} scope="col">
                              Data
                            </th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Trair E Coçar É Só Começar
                            </td>
                            <td style={{ textAlign: "center" }}>28/12/2022</td>
                            <td>
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample"
                              >
                                <h2
                                  className="accordion-header"
                                  id="flush-headingOne"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                  ></button>
                                </h2>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              className="col"
                              style={{ border: "none" }}
                            >
                              <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body border-0">
                                  <div className="container">
                                    <div className="col">
                                      <div className="row mb-2">
                                        <div className="col">
                                          <div className="col mb-1">
                                            <small className="text-muted">
                                              Nome do Evento
                                            </small>
                                          </div>
                                          <div className="col">
                                            Trair E Coçar É Só Começar
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="col mb-1">
                                            <small className="text-muted">
                                              Categoria
                                            </small>
                                          </div>
                                          <div className="col">
                                            Entretenimento
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="col mb-1">
                                            <small className="text-muted">
                                              Descrição
                                            </small>
                                          </div>
                                          <div className="col">
                                            Dramaturgia de humor que mostra as
                                            histórias de um casal que se separa,
                                            mora no mesmo prédio e divide a
                                            mesma empregada.
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Luís De Matos | Impossível Ao Vivo
                            </td>
                            <td style={{ textAlign: "center" }}>
                              06/12/2022
                            </td>
                            <td>
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample"
                              >
                                <h2
                                  className="accordion-header"
                                  id="flush-headingTwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                  ></button>
                                </h2>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Cirque Du Soleil | Crystal
                            </td>
                            <td style={{ textAlign: "center" }}>
                              21/11/2022
                            </td>
                            <td>
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample"
                              >
                                <h2
                                  className="accordion-header"
                                  id="flush-headingThree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                  ></button>
                                </h2>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Commedia A La Carte | Do Nada
                            </td>
                            <td style={{ textAlign: "center" }}>
                              15/10/2022
                            </td>
                            <td>
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample"
                              >
                                <h2
                                  className="accordion-header"
                                  id="flush-headingFour"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseFour"
                                  ></button>
                                </h2>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              O Alfaite de Odessa | Um milagre De Natal
                            </td>
                            <td style={{ textAlign: "center" }}>
                              03/10/2022
                            </td>
                            <td>
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample"
                              >
                                <h2
                                  className="accordion-header"
                                  id="flush-headingFive"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseFive"
                                  ></button>
                                </h2>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Discoveries Festival | 2022
                            </td>
                            <td style={{ textAlign: "center" }}>19/08/2022</td>
                            <td>
                              <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample"
                              >
                                <h2
                                  className="accordion-header"
                                  id="flush-headingSix"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSix"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseSix"
                                  ></button>
                                </h2>
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
          </div>
        </div>
      </main>
    </>
  );
}
