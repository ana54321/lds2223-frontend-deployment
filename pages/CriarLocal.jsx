import React, { useState } from "react";
import axios from "axios";

export default function CriarLocal() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    maxCapacity: 0,
  });

  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://ticketnftsbackend.azurewebsites.net/Location/create",
        formData
      );
      setSubmitStatus("Success");
    } catch (err) {
      setSubmitStatus("Error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <main id="main">
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Gestão</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3" />
          <div className="row mb-3" />
          <div className="container">
            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <p className="text-center">Criação de um local</p>
                </div>
                <div className="row mb-3" />
                <div className="row mb-3" />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <label for="name" className="form-label">
                        Nome do local:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Nome do local"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Por favor insira a informação pertendida.
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="description" className="form-label">
                        Descrição do local:
                      </label>
                      <textarea
                        name="description"
                        className="form-control"
                        id="description"
                        rows={1}
                        placeholder="Descrição do local"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <div className="col-6">
                      <label for="maxCapacity" className="form-label">
                        Capacidade máxima do local:
                      </label>
                      <input
                        name="maxCapacity"
                        type="number"
                        className="form-control"
                        id="maxCapacity"
                        placeholder="Capacidade máxima do local"
                        value={formData.maxCapacity}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Por favor insira a informação pertendida.
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <div className="col-6">
                      <label for="street" className="form-label">
                        Morada:
                      </label>
                      <input
                        name="street"
                        type="text"
                        className="form-control"
                        id="street"
                        placeholder="Morada"
                        value={formData.street}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Por favor insira a informação pertendida.
                      </div>
                    </div>
                    <div className="row mb-3" />
                    <div className="row mb-3" />
                    <div className="row">
                      <div className="col">
                        <label for="city" className="form-label">
                          Cidade:
                        </label>
                        <input
                          name="city"
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="Cidade"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira a informação pertendida.
                        </div>
                      </div>
                      <div className="col">
                        <label for="state" className="form-label">
                          Distrito:
                        </label>
                        <input
                          name="state"
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="Distrito"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira a informação pertendida.
                        </div>
                      </div>

                      <div className="col">
                        <label for="postalCode" className="form-label">
                          Código-Postal:
                        </label>
                        <input
                          name="postalCode"
                          type="text"
                          className="form-control"
                          id="postalCode"
                          placeholder="Código-Postal"
                          value={formData.postalCode}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira a informação pertendida.
                        </div>
                      </div>
                      <div className="col">
                        <label for="country" className="form-label">
                          País:
                        </label>
                        <input
                          name="country"
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder="País"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor insira a informação pertendida.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row mb-3">
                    <small className="text-muted">
                      Deseja criar o Layout para esta localização?
                    </small>
                  </div>
                  <div className="row mb-3">
                    <a href="/Layout">
                      <button type="button" className="btn btn-secondary">
                        Sim
                      </button>
                    </a>
                  </div>
                  <div className="row mb-3">
                    <a href="/">
                      <button
                        id="submit"
                        type="submit"
                        className="btn btn-secondary"
                      >
                        Não
                      </button>
                    </a>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/ListaLocais">
                      <button
                        id="submit"
                        className="btn btn-primary"
                        type="submit"
                      >
                        Guardar alterações
                      </button>
                      {submitStatus === "Success" && (
                        <p>Guardado Com Sucesso!</p>
                      )}
                      {submitStatus === "Error" && (
                        <p>Ocorreu um erro. Tente novamente, por favor.</p>
                      )}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row mb-3" />
          <div className="row mb-3" />
        </div>
      </main>
    </div>
  );
}
