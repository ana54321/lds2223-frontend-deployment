import React from "react";

export default function Musica() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div
            className="page-header d-flex align-items-center"
            style={{ backgroundImage: 'url("img/concertos.jpg")' }}
          >
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Música</h2>
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
                      <th scope="row">FEV 9</th>
                      <td>FESTIVAL AUTHENTICA 2023</td>
                      <td>Altice Forum Braga</td>
                      <td>
                        <a href="/DetalhesMusica">
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
                      <th scope="row">MAR 11</th>
                      <td>BÁRBARA TINOCO - 2023</td>
                      <td>Super Bock Arena - Pavilhão Rosa Mota</td>
                      <td>
                        <a href="/DetalhesMusica">
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
                      <th scope="row">ABR 12</th>
                      <td>CAROLINA DE DEUS</td>
                      <td>Teatro Maria Matos | Lisboa</td>
                      <td>
                        <a href="/DetalhesMusica">
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
                      <th scope="row">MAI 23</th>
                      <td>PANDA E OS CARICAS NO ESPAÇO</td>
                      <td>Multiusos De Guimarães</td>
                      <td>
                        <a href="/DetalhesMusica">
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
                      <th scope="row">JUN 30</th>
                      <td>ZÉ NETO E CRISTIANO</td>
                      <td>Pavilhão Multiusos de Gondomar</td>
                      <td>
                        <a href="/DetalhesMusica">
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
