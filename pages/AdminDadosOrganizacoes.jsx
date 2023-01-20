import React from "react";

export default function AdminDadosOrganizacoes() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-7 text-center">
                  <h2>Dados De Organizações</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ color: "#181768;" }}>
                    Wallet da Organização
                  </th>
                  <th scope="col" style={{ color: "#181768;" }}>
                    Nome da Organização
                  </th>
                  <th scope="col" style={{ color: "#181768;" }}>
                    Sede
                  </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "min-content; word-break: break-word;",
                    }}
                  >
                    aserdt5thbiu8jimnbhvgffy78ijmi87ygyb...mo0
                  </td>
                  <td>Rádio Nova Era</td>
                  <td>Porto</td>
                  <td>
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <h2 className="accordion-header" id="flush-headingOne">
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
                  <td colSpan={4} style={{ border: "none;" }}>
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
                                    Nome da Organização
                                  </small>
                                </div>
                                <div className="col">Rádio Nova Era</div>
                              </div>

                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">Rua</small>
                                </div>
                                <div className="col">Rua Camélias, Nº 134</div>
                              </div>
                            </div>

                            <div className="row mb-2">
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">Cidade</small>
                                </div>
                                <div className="col">Vila Nova de Gaia</div>
                              </div>
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">Estado</small>
                                </div>
                                <div className="col">Porto</div>
                              </div>
                            </div>

                            <div className="row mb-2">
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">País</small>
                                </div>
                                <div className="col">Portugal</div>
                              </div>
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">
                                    Código Postal
                                  </small>
                                </div>
                                <div className="col">4430-038</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      width: "min-content; word-break: break-word;",
                    }}
                  >
                    tbvt98jm65eu8jimwecd45bn7m0bvrt74az1d...be9
                  </td>
                  <td>Everything Is New</td>
                  <td>Lisboa</td>
                  <td>
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <h2 className="accordion-header" id="flush-headingTwo">
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
                  <td colSpan={4} style={{ border: "none;" }}>
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
                                    Nome da Organização
                                  </small>
                                </div>
                                <div className="col">Everything Is New</div>
                              </div>

                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">Rua</small>
                                </div>
                                <div className="col">
                                  R. Pêro da Covilhã, Nº36
                                </div>
                              </div>
                            </div>

                            <div className="row mb-2">
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">Cidade</small>
                                </div>
                                <div className="col">Lisboa</div>
                              </div>
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">Estado</small>
                                </div>
                                <div className="col">Lisboa</div>
                              </div>
                            </div>

                            <div className="row mb-2">
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">País</small>
                                </div>
                                <div className="col">Portugal</div>
                              </div>
                              <div className="col">
                                <div className="col mb-1">
                                  <small className="text-muted">
                                    Código-Postal
                                  </small>
                                </div>
                                <div className="col">1400-296</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
