import React, { useEffect, useState } from "react";
import axios from "axios";

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { section, row, seat1, seat2 } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            placeholder="Secção"
            value={section}
            onChange={(event) => onValUpdate(index, event)}
            name="section"
            className="form-control"
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Fila"
            value={row}
            onChange={(event) => onValUpdate(index, event)}
            name="row"
            className="form-control"
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Primeiro lugar"
            value={seat1}
            onChange={(event) => onValUpdate(index, event)}
            name="seat1"
            className="form-control"
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Último lugar"
            value={seat2}
            onChange={(event) => onValUpdate(index, event)}
            name="seat2"
            className="form-control"
            required
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });
}

export default function Layout() {
  const [eventDetail, setEventDetail] = useState([]);

  const fetchEventDetail = () => {
    return fetch("https://ticketnftsbackend.azurewebsites.net/Layout/creator-wallet//create")
      .then((response) => response.json())
      .then((data) => setEventDetail(data));
  };

  useEffect(() => {
    fetchEventDetail();
  }, []);

  const [formData, setFormData] = useState({
    section: "",
    row: "",
    seat1: "",
    seat2: "",
    layout: "",
    nomeLayout: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ticketnftsbackend.azurewebsites.net/Layout/100/0/filters?", formData);
      setSubmitStatus("Success");
    } catch (err) {
      setSubmitStatus("Error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [rows, initRow] = useState([]);

  const addRowTable = () => {
    const data = {
      section: "",
      row: "",
      seat1: "",
      seat2: "",
    };
    initRow([...rows, data]);
  };

  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };

  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };

  return (
    <div>
      <main id="main">
        <div className="breadcrumbs">
          <div lassName="page-header d-flex align-items-center">
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
                  <p className="text-center">Layout</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div>
                    <a href="/CriarLocal" className="btn btn-secondary">
                      <i className="fa fa-arrow-left" /> Voltar
                    </a>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Secção</th>
                        <th>Fila</th>
                        <th>Primeiro Lugar </th>
                        <th>Último Lugar</th>
                        <th>
                          <button
                            className="btn btn-danger"
                            onClick={addRowTable}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRows
                        rows={rows}
                        tableRowRemove={tableRowRemove}
                        onValUpdate={onValUpdate}
                      />
                    </tbody>
                  </table>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="col-6">
                    <label htmlFor="layout" className="form-label">
                      Escolher layout:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      name="layout"
                      className="form-control"
                      id="layout"
                      value={formData.layout}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="col-6">
                    <label htmlFor="nomeLayout" className="form-label">
                      Nome do layout:
                    </label>
                    <input
                      type="text"
                      name="nomeLayout"
                      className="form-control"
                      id="layout"
                      placeholder="Nome do layout"
                      value={formData.nomeLayout}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Por favor insira a informação pertendida.
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/CriarLocal">
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
