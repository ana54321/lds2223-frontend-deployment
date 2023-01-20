import React, { useState } from "react";

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  
  return rows.map((rowsData, index) => {
    const { section, row, seat1, seat2, price } = rowsData;

    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={section}
            onChange={(event) => onValUpdate(index, event)}
            name="section"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={row}
            onChange={(event) => onValUpdate(index, event)}
            name="row"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={seat1}
            onChange={(event) => onValUpdate(index, event)}
            name="seat1"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={seat2}
            onChange={(event) => onValUpdate(index, event)}
            name="seat2"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(event) => onValUpdate(index, event)}
            name="price"
            className="form-control"
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

export default function GerarBilhete() {
  const [rows, initRow] = useState([]);

  const addRowTable = () => {
    const data = {
      section: "",
      row: "",
      seat1: "",
      seat2: "",
      price: "",
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
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Gestão</h2>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <p className="text-center">Gerar bilhete</p>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="titulo" className="form-label">
                        Título:
                      </label>
                      <input
                        name="titulo"
                        type="text"
                        className="form-control"
                        id="titulo"
                        placeholder="Título"
                        onchange="{this.handleChange}"
                        required
                      />
                      <div className="invalid-feedback">
                        Por favor insira a informação pertendida.
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="data" className="form-label">
                        Data:
                      </label>
                      <input
                        name="data"
                        type="date"
                        className="form-control"
                        id="data"
                        onchange="{this.handleChange}"
                        required
                      />
                      <div className="invalid-feedback">
                        Por favor insira a informação pertendida.
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Secção</th>
                        <th>Fila</th>
                        <th>Lugar de</th>
                        <th>até</th>
                        <th>Preço</th>
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
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="gestaoHome.html">
                      <button className="btn btn-primary" type="submit">
                        Guardar alterações
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}
