import React from "react";

export default function UserExtraData() {
  return (
    <div>
      <main id="main">
        <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-9 text-center">
                  <h2>Dados Adicionais</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5
                        style={{ color: "black" }}
                        className="card-title text-center pb-0 fs-4"
                      >
                        Dados De Utilizador
                      </h5>
                      <p className="text-center small">
                        Insira os dados no campo abaixo
                      </p>
                    </div>
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira o seu nome!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourNIF" className="form-label">
                          NIF
                        </label>
                        <input
                          type="number"
                          name="nif"
                          className="form-control"
                          id="yourNIF"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira o seu NIF!
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="yourEmail"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira um email válido!
                        </div>
                      </div>
                      <div className="pt-4 pb-2">
                        <h5
                          style={{ color: "black" }}
                          className="card-title text-center pb-0 fs-4"
                        >
                          Dados De Morada
                        </h5>
                        <p className="text-center small">
                          Insira os dados no campo abaixo
                        </p>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourMorada" className="form-label">
                          Morada
                        </label>
                        <input
                          type="morada"
                          name="morada"
                          className="form-control"
                          id="yourMorada"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira a sua morada!
                        </div>
                      </div>
                      <div className="row">
                        <div className="col pt-4 pb-2">
                          <label htmlFor="porta" className="form-label">
                            Número de Porta
                          </label>
                          <input
                            name="porta"
                            type="text"
                            className="form-control"
                            id="porta"
                            required
                          />
                          <div className="invalid-feedback">
                            Por favor insira o número de porta.
                          </div>
                        </div>
                        <div className="col pt-4 pb-2">
                          <label htmlFor="codigo_postal" className="form-label">
                            Código-Postal
                          </label>
                          <input
                            name="codigo_postal"
                            type="text"
                            className="form-control"
                            id="codigo_postal"
                            required
                          />
                          <div className="invalid-feedback">
                            Por favor insira o código-postal.
                          </div>
                        </div>
                        <div className="col-12 pt-4 pb-2">
                          <label htmlFor="yourCity" className="form-label">
                            Cidade
                          </label>
                          <input
                            type="city"
                            name="city"
                            className="form-control"
                            id="yourCity"
                            required
                          />
                          <div className="invalid-feedback">
                            Por favor insira a sua Cidade!
                          </div>
                        </div>
                        <div className="col-12 pt-4 pb-2">
                          <label htmlFor="yourCountry" className="form-label">
                            País
                          </label>
                          <input
                            type="país"
                            name="país"
                            className="form-control"
                            id="yourCountry"
                            required
                          />
                          <div className="invalid-feedback">
                            Por favor insira o seu País!
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3" />
                      <div className="row mb-3" />
                      <div className="d-flex justify-content-center">
                        <div className="col-6">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Guardar alterações
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <small className="text-muted">
                          Deseja submeter os seus dados?
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
