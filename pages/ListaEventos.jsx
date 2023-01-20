import React from "react";

export default function ListaEventos() {
  return (
    <div>
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
                        Lista de eventos
                      </h3>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <a href="/CriarEvento" className="btn btn-secondary">
                        <i className="fa fa-plus" /> Adicionar
                      </a>
                    </div>
                    <div className="row mb-3" />
                    <div className="row mb-3" />
                    <div className="d-flex align-items-center justify-content-center">
                      <table id="table" className="table table-hover">
                        <thead>
                          <tr>
                            <th style={{ textAlign: "center" }} scope="col">
                              Evento
                            </th>
                            <th style={{ textAlign: "center" }} scope="col">
                              Categoria
                            </th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Trair E Coçar É Só Começar
                            </td>
                            <td style={{ textAlign: "center" }}>
                              Entretenimento
                            </td>
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
                                      <div className="row mb-2">
                                        <small className="text-black">
                                          Datas:
                                        </small>
                                        <div className="col">
                                          <table
                                            id="table1"
                                            className="table table-striped"
                                          >
                                            <thead>
                                              <tr>
                                                <th>Dia</th>
                                                <th>Hora de Início</th>
                                                <th>Duração (minutos)</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>17/01/2023</td>
                                                <td>21:00</td>
                                                <td>90</td>
                                              </tr>
                                              <tr>
                                                <td>18/01/2023</td>
                                                <td>21:00</td>
                                                <td>90</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row mb-2">
                                        <small className="text-black">
                                          Lineup:
                                        </small>
                                        <div className="col">
                                          <table
                                            id="table2"
                                            className="table table-striped"
                                          >
                                            <thead>
                                              <tr>
                                                <th>Nome do Artista</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  UAU - Produção de
                                                  Espectáculos, Lda
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row mb-2">
                                        <div className="col">
                                          <div className="form-check form-switch">
                                            <small className="text-black">
                                              Ocultar
                                            </small>
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              id="flexSwitchCheckDefault"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="col">
                                        <div className="col mb-1">
                                          <small className="text-muted">
                                            Estado
                                          </small>
                                        </div>
                                        <div className="col">Disponível</div>
                                      </div>
                                      <hr />
                                      <div className="row mb-2">
                                        <div className="col">
                                          <a href="criarEvento.html">
                                            <button
                                              className="btn btn-outline-dark"
                                              type="submit"
                                            >
                                              Editar Evento
                                            </button>
                                          </a>
                                          <a href="listaLocais.html">
                                            <button
                                              className="btn btn-outline-dark"
                                              type="submit"
                                            >
                                              Detalhes Local
                                            </button>
                                          </a>
                                          <a href="layout.html">
                                            <button
                                              className="btn btn-outline-dark"
                                              type="submit"
                                            >
                                              Detalhes Layout
                                            </button>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <hr />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              Luís de Matos | Impossível Ao Vivo
                            </td>
                            <td style={{ textAlign: "center" }}>
                              Entretenimento
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
                              Cirque du Soleil | Crystal
                            </td>
                            <td style={{ textAlign: "center" }}>
                              Arte &amp; Teatro
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
                              Commedia a la Carte | Do Nada
                            </td>
                            <td style={{ textAlign: "center" }}>
                              Entretenimento
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
                              O Alfaite de Odessa | Um milagre de Natal
                            </td>
                            <td style={{ textAlign: "center" }}>
                              Arte &amp; Teatro
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
                            <td style={{ textAlign: "center" }}>Música</td>
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
    </div>
  );
}
