import React from "react";

export default function ArteTeatro() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div
            className="page-header d-flex align-items-center"
            style={{ backgroundImage: 'url("img/arteTeatro.jpg")' }}
          >
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Arte &amp; Teatro</h2>
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
                      <th scope="row">JAN 12</th>
                      <td>CICLOS. EXPOSIÇÃO DE ARQUITETURA</td>
                      <td>Centro Cultural de Belém</td>
                      <td>
                        <a href="/DetalhesArteTeatro">
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
                      <th scope="row">JAN 28</th>
                      <td>COMMEDIA A LA CARTE | DO NADA</td>
                      <td>Teatro Tivoli BBVA</td>
                      <td>
                        <a href="/DetalhesArteTeatro">
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
                      <th scope="row">FEV 7</th>
                      <td>TRAIR E COÇAR É SÓ COMEÇAR</td>
                      <td>Casino Lisboa</td>
                      <td>
                        <a href="/DetalhesArteTeatro">
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
                      <th scope="row">MAR 8</th>
                      <td>LAR DOCE LAR</td>
                      <td>Teatro Sá Da Bandeira</td>
                      <td>
                        <a href="/DetalhesArteTeatro">
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
                      <th scope="row">MAR 15</th>
                      <td>O LAGO DOS CISNES | BALLET DE KIEV</td>
                      <td>Teatro Tivoli BBVA</td>
                      <td>
                        <a href="/DetalhesArteTeatro">
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
