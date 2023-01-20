import React from "react";

export default function Entretenimento() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div
            className="page-header d-flex align-items-center"
            style={{ backgroundImage: 'url("img/entretenimento.webp")' }}
          >
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Entretenimento</h2>
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
                      <th scope="row">JAN 13</th>
                      <td>AÇORES | PROCESSO - DIOGO BATÁGUAS</td>
                      <td>
                        Teatro Ribeiragrandense | Ribeira Grande, Ilha de São
                        Miguel
                      </td>
                      <td>
                        <a href="/DetalhesEntretenimento">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            +info
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">FEV 11</th>
                      <td>'DIOGO' LUÍS FRANCO-BASTOS</td>
                      <td>Cineteatro Messias | Mealhada</td>
                      <td>
                        <a href="/DetalhesEntretenimento">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            +info
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">ABR 18</th>
                      <td>ALGARVE | SUAR DO BIGODE</td>
                      <td>Palácio de Congressos Do Algarve</td>
                      <td>
                        <a href="/DetalhesEntretenimento">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            +info
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">MAI 7</th>
                      <td>ALEXANDRE SANTOS</td>
                      <td>Coliseu Porto Ageas</td>
                      <td>
                        <a href="/DetalhesEntretenimento">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
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
      </main>
    </>
  );
}
