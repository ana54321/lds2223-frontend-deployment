import React, { useState } from "react";
import axios from "axios";

function AddDates({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { datetime, duration } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="datetime-local"
            value={datetime}
            onChange={(event) => onValUpdate(index, event)}
            name="datetime"
            className="form-control"
            required
          />
        </td>
        <td>
          <input
            type="number"
            placeholder="Duração (minutos)"
            value={duration}
            onChange={(event) => onValUpdate(index, event)}
            name="duration"
            className="form-control"
            required
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });
}

function AddArtists({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { lineup } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            placeholder="Nome do Artista"
            value={lineup}
            onChange={(event) => onValUpdate(index, event)}
            name="lineup"
            className="form-control"
            required
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });
}

function AddTicketTiers({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { title, perks, maxTickets } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => onValUpdate(index, event)}
            name="title"
            className="form-control"
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Perks"
            value={perks}
            onChange={(event) => onValUpdate(index, event)}
            name="perks"
            className="form-control"
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Quantidade Máxima"
            value={maxTickets}
            onChange={(event) => onValUpdate(index, event)}
            name="maxTickets"
            className="form-control"
            required
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });
}

export default function CriarEvento() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    lineup: "",
    capacity: "",
    poster: null,
    datetime: "",
    duration: 0,
    title: "",
    perks: "",
    maxTickets: 0,
  });

  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://ticketnftsbackend.azurewebsites.net/Event/create",
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

  const [rows, initRow] = useState([]);

  const addRowTable = () => {
    const data = {
      datetime: "",
      duration: "",
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

  const [rows1, initRow1] = useState([]);

  const addRowTable1 = () => {
    const data1 = {
      lineup: "",
    };
    initRow1([...rows1, data1]);
  };

  const tableRowRemove1 = (index1) => {
    const dataRow1 = [...rows1];
    dataRow1.splice(index1, 1);
    initRow1(dataRow1);
  };

  const onValUpdate1 = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow1(data);
  };

  const [rows2, initRow2] = useState([]);

  const addRowTable2 = () => {
    const data2 = {
      title: "",
      perks: "",
      maxTickets: "",
    };
    initRow2([...rows2, data2]);
  };

  const tableRowRemove2 = (index2) => {
    const dataRow2 = [...rows2];
    dataRow2.splice(index2, 1);
    initRow2(dataRow2);
  };

  const onValUpdate2 = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow2(data);
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
                <form onSubmit={handleSubmit}>
                  <div className="pt-4 pb-2">
                    <p className="text-center">Criação de um evento</p>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <div className="col-6">
                      <label for="name" className="form-label">
                        Nome do evento:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Nome do evento"
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
                        Descrição:
                      </label>
                      <textarea
                        name="description"
                        className="form-control"
                        id="description"
                        rows={1}
                        placeholder="Descrição do evento"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <div className="col-6">
                      <label for="category" className="form-label">
                        Categoria:
                      </label>
                      <select for="category" className="form-select">
                        <option value={formData.category}>
                          Entretenimento
                        </option>
                        <option value={formData.category}>Música</option>
                        <option value={formData.category}>Desporto</option>
                        <option value={formData.category}>Arte/Teatro</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <div className="col-6">
                      <label for="poster" className="form-label">
                        Escolher layout:
                      </label>
                      <input
                        type="file"
                        name="poster"
                        accept="image/*"
                        className="form-control"
                        id="poster"
                        value={formData.poster}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
                      <label for="localEvento" className="form-label">
                        Local do Evento:
                      </label>
                      <div className="input-group mb-6">
                        <input
                          type="text"
                          name="localEvento"
                          className="form-control"
                          placeholder="Nome do local"
                          aria-label="Procurar local"
                          aria-describedby="basic-addon2"
                          value={formData.localEvento}
                          onChange={handleChange}
                          required
                        />
                        <div className="input-group-append">
                          <a href="/ListaLocais">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search" />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <div className="col-6">
                      <label for="capacity" className="form-label">
                        Capacidade:
                      </label>
                      <input
                        type="number"
                        name="capacity"
                        className="form-control"
                        placeholder="Capacidade"
                        id="capacity"
                        value={formData.capacity}
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
                    <label className="form-label" htmlFor="dates">
                      Datas:
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <table id="table1" className="table table-hover">
                      <thead>
                        <tr>
                          <th>Dia/Hora</th>
                          <th>Duração (minutos)</th>
                          <th>
                            <button
                              className="btn btn-danger"
                              onClick={addRowTable}
                            >
                              <i class="fa fa-plus"></i>
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <AddDates
                          rows={rows}
                          tableRowRemove={tableRowRemove}
                          onValUpdate={onValUpdate}
                        />
                      </tbody>
                    </table>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row">
                    <label className="form-label" htmlFor="lineup">
                      Lineup:
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <table id="table2" className="table table-hover">
                      <thead>
                        <tr>
                          <th>Nome do artista</th>
                          <th>
                            <button
                              className="btn btn-danger"
                              onClick={addRowTable1}
                            >
                              <i class="fa fa-plus"></i>
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <AddArtists
                          rows={rows1}
                          tableRowRemove={tableRowRemove1}
                          onValUpdate={onValUpdate1}
                        />
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <label className="form-label" htmlFor="ticketTiers">
                      Bilhetes:
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <table id="table3" className="table table-hover">
                      <thead>
                        <tr>
                          <th>Título</th>
                          <th>Perks</th>
                          <th>Quantidade (máx)</th>
                          <th>
                            <button
                              className="btn btn-danger"
                              onClick={addRowTable2}
                            >
                              <i class="fa fa-plus"></i>
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <AddTicketTiers
                          rows={rows2}
                          tableRowRemove={tableRowRemove2}
                          onValUpdate={onValUpdate2}
                        />
                      </tbody>
                    </table>
                  </div>
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="row mb-3" />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/ListaEventos">
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
                  <div className="row mb-3" />
                  <div className="row mb-3" />
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
