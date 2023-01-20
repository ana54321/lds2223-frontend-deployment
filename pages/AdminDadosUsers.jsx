import React from "react";

export default function AdminDadosUsers() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-7 text-center">
                  <h2>Dados Dos Utilizadores</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card mb-3 mt-3">
              <div className="card-body">
                <div className="container">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col" style={{ color: "#181768;" }}>
                          Wallet de Utilizador
                        </th>
                        <th scope="col" style={{ color: "#181768;" }}>
                          Nome de Utilizador
                        </th>
                        <th scope="col" style={{ color: "#181768;" }}>
                          Morada
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
                        <td>Nuno Filipe Oliveira Matos</td>
                        <td>Rua Doutor Augusto Ribeiro Vaz, Nº155</td>
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
                          colSpan={4}
                          className="col"
                          style={{ border: "none;" }}
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
                                          Nome Completo
                                        </small>
                                      </div>
                                      <div className="col">
                                        Nuno Filipe Oliveira Matos
                                      </div>
                                    </div>

                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Rua
                                        </small>
                                      </div>
                                      <div className="col">
                                        Rua Doutor Augusto Ribeiro Vaz, Nº155
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Cidade
                                        </small>
                                      </div>
                                      <div className="col">
                                        Oliveira de Azeméis
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Estado
                                        </small>
                                      </div>
                                      <div className="col">Aveiro</div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          País
                                        </small>
                                      </div>
                                      <div className="col">Portugal</div>
                                    </div>
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Código Postal
                                        </small>
                                      </div>
                                      <div className="col">3720-519</div>
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
                          mserdt5thbiu8jimwecd45bn7m0ijmi87ygyb...87h
                        </td>
                        <td>Helena Isabel de Sousa Moreira</td>
                        <td>Travessa Dos Casais, Nº55</td>
                        <td>
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample2"
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
                          colSpan={4}
                          className="col"
                          style={{ border: "none;" }}
                        >
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample2"
                          >
                            <div className="accordion-body border-0">
                              <div className="container">
                                <div className="col">
                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Nome Completo
                                        </small>
                                      </div>
                                      <div className="col">
                                        Helena Isabel de Sousa Moreira
                                      </div>
                                    </div>

                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Rua
                                        </small>
                                      </div>
                                      <div className="col">
                                        Travessa Dos Casais, Nº55
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
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
                                          Estado
                                        </small>
                                      </div>
                                      <div className="col">Porto</div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          País
                                        </small>
                                      </div>
                                      <div className="col">Portugal</div>
                                    </div>
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Código Postal
                                        </small>
                                      </div>
                                      <div className="col">4620-822</div>
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
                          ybthu75l7pvz8omul054fcen7m0bvrt74az1d...u6t
                        </td>
                        <td>Ana Patricia Macedo Brás</td>
                        <td>Travessa Alto da Lixa, Nº234</td>
                        <td>
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample3"
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
                        <td
                          colSpan={4}
                          className="col"
                          style={{ border: "none;" }}
                        >
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample3"
                          >
                            <div className="accordion-body border-0">
                              <div className="container">
                                <div className="col">
                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Nome Completo
                                        </small>
                                      </div>
                                      <div className="col">
                                        Ana Patrícia Macedo Brás
                                      </div>
                                    </div>

                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Rua
                                        </small>
                                      </div>
                                      <div className="col">
                                        Travessa Alto da Lixa, Nº234
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Cidade
                                        </small>
                                      </div>
                                      <div className="col">Amarante</div>
                                    </div>
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Estado
                                        </small>
                                      </div>
                                      <div className="col">Porto</div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          País
                                        </small>
                                      </div>
                                      <div className="col">Portugal</div>
                                    </div>
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Código Postal
                                        </small>
                                      </div>
                                      <div className="col">4615-013</div>
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
                          ybvt98jm65eu8jimwecd45bn7m0bvrt74az1d...be9
                        </td>
                        <td>Ana Isabel Martins Alves</td>
                        <td>Rua Bartolomeu Dias, Nº224</td>
                        <td>
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample4"
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
                        <td
                          colSpan={4}
                          className="col"
                          style={{ border: "none;" }}
                        >
                          <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample4"
                          >
                            <div className="accordion-body border-0">
                              <div className="container">
                                <div className="col">
                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Nome Completo
                                        </small>
                                      </div>
                                      <div className="col">
                                        Ana Isabel Martins Alves
                                      </div>
                                    </div>

                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Rua
                                        </small>
                                      </div>
                                      <div className="col">
                                        Rua Bartolomeu Dias, Nº224
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Cidade
                                        </small>
                                      </div>
                                      <div className="col">Barcelos</div>
                                    </div>
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Estado
                                        </small>
                                      </div>
                                      <div className="col">Braga</div>
                                    </div>
                                  </div>

                                  <div className="row mb-2">
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          País
                                        </small>
                                      </div>
                                      <div className="col">Portugal</div>
                                    </div>
                                    <div className="col">
                                      <div className="col mb-1">
                                        <small className="text-muted">
                                          Código Postal
                                        </small>
                                      </div>
                                      <div className="col">4750-159</div>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
