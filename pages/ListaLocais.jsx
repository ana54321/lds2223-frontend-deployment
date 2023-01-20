import React from "react";

export default function ListaLocais() {
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
                          Lista de locais
                        </h3>
                      </div>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/CriarLocal" className="btn btn-secondary">
                          <i className="fa fa-plus" /> Adicionar
                        </a>
                      </div>
                      <div className="row mb-3" />
                      <div className="row mb-3" />
                      <div className="d-flex align-items-center justify-content-center">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }} scope="col">
                                Nome do Local
                              </th>
                              <th style={{ textAlign: "center" }} scope="col">
                                Morada
                              </th>
                              <th style={{ textAlign: "center" }} scope="col">
                                Código Postal
                              </th>
                              <th style={{ textAlign: "center" }} scope="col">
                                Cidade
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                Altice Arena
                              </td>
                              <td style={{ textAlign: "center" }}>
                                Rossio dos Olivais
                              </td>
                              <td style={{ textAlign: "center" }}>1990-231</td>
                              <td style={{ textAlign: "center" }}>Lisboa</td>
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
                                colSpan={5}
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
                                                Nome do local
                                              </small>
                                            </div>
                                            <div className="col">
                                              Altice Arena
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Capacidade máxima
                                              </small>
                                            </div>
                                            <div className="col">20 000</div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Descrição
                                              </small>
                                            </div>
                                            <div className="col">
                                              Altice Arena, anteriormente
                                              Pavilhão Atlântico e MEO Arena,
                                              originalmente Pavilhão da Utopia,
                                              é um espaço destinado a atrações
                                              públicas e festivais localizado no
                                              Parque das Nações, em Lisboa,
                                              Portugal.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row mb-2">
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Morada
                                              </small>
                                            </div>
                                            <div className="col">
                                              Rossio dos Olivais
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Cidade
                                              </small>
                                            </div>
                                            <div className="col">Lisboa</div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Código-Postal
                                              </small>
                                            </div>
                                            <div className="col">1990-231</div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                País
                                              </small>
                                            </div>
                                            <div className="col">Portugal</div>
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
                                        <div className="row mb-2">
                                          <div className="col">
                                            <a href="criarLocal.html">
                                              <button
                                                className="btn btn-outline-dark"
                                                type="submit"
                                              >
                                                Editar Local
                                              </button>
                                            </a>
                                            <a href="layout.html">
                                              <button
                                                className="btn btn-outline-dark"
                                                type="submit"
                                              >
                                                Gerir Layouts
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
                                Estádio do Dragão
                              </td>
                              <td style={{ textAlign: "center" }}>
                                Via Futebol Clube do Porto
                              </td>
                              <td style={{ textAlign: "center" }}>4350-415</td>
                              <td style={{ textAlign: "center" }}>Porto</td>
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
                              <td
                                colSpan={5}
                                className="col"
                                style={{ border: "none" }}
                              >
                                <div
                                  id="flush-collapseTwo"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingTwo"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body border-0">
                                    <div className="container">
                                      <div className="col">
                                        <div className="row mb-2">
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Nome do local
                                              </small>
                                            </div>
                                            <div className="col">
                                              Estádio do Dragão
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Capacidade máxima
                                              </small>
                                            </div>
                                            <div className="col">50 033</div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Descrição
                                              </small>
                                            </div>
                                            <div className="col">
                                              O Estádio do Dragão é um estádio
                                              de futebol de Categoria 4,
                                              localizado na freguesia de
                                              Campanhã, cidade do Porto,
                                              propriedade do FC Porto, sendo
                                              neste recinto que a equipa de
                                              futebol joga as suas partidas em
                                              casa.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row mb-2">
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Morada
                                              </small>
                                            </div>
                                            <div className="col">
                                              Via Futebol Clube do Porto
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Cidade
                                              </small>
                                            </div>
                                            <div className="col">Porto</div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                Código-Postal
                                              </small>
                                            </div>
                                            <div className="col">4350-415</div>
                                          </div>
                                          <div className="col">
                                            <div className="col mb-1">
                                              <small className="text-muted">
                                                País
                                              </small>
                                            </div>
                                            <div className="col">Portugal</div>
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
                                        <div className="row mb-2">
                                          <div className="col">
                                            <a href="criarLocal.html">
                                              <button
                                                className="btn btn-outline-dark"
                                                type="submit"
                                              >
                                                Editar Local
                                              </button>
                                            </a>
                                            <a href="layout.html">
                                              <button
                                                className="btn btn-outline-dark"
                                                type="submit"
                                              >
                                                Gerir Layouts
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
                                Altice Forum Braga
                              </td>
                              <td style={{ textAlign: "center" }}>
                                R. Monsenhor Airosa
                              </td>
                              <td style={{ textAlign: "center" }}>4705-002</td>
                              <td style={{ textAlign: "center" }}>Braga</td>
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
                                Super Bock Arena
                              </td>
                              <td style={{ textAlign: "center" }}>
                                Jardins do Palácio de Cristal, R. de Dom Manuel
                                II
                              </td>
                              <td style={{ textAlign: "center" }}>4050-346</td>
                              <td style={{ textAlign: "center" }}>Porto</td>
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
                                Casa da Musica
                              </td>
                              <td style={{ textAlign: "center" }}>
                                Av. da Boavista 604-610
                              </td>
                              <td style={{ textAlign: "center" }}>4149-071</td>
                              <td style={{ textAlign: "center" }}>Porto</td>
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
                                Multiusos de Guimarães
                              </td>
                              <td style={{ textAlign: "center" }}>
                                Alameda Cidade de Lisboa 481
                              </td>
                              <td style={{ textAlign: "center" }}>-</td>
                              <td style={{ textAlign: "center" }}>Guimarães</td>
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
