import React from "react";

export default function AdminBlacklist() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>Blacklist</h2>
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
                        <th scope="col">Wallet</th>
                        <th scope="col">Tipo de Utilizador</th>
                        <th scope="col">Blacklist</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>aserdt5thbiu8jimnbhvgffy78ijmi87ygyb...mo0</td>
                        <td>Gestor De Eventos</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>mserdt5thbiu8jimwecd45bn7m0ijmi87ygyb...87h</td>
                        <td>Cliente</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>mserdt5thbiu8jimwecd45bn7m0bvrt74az1d...2lo</td>
                        <td>Cliente</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>ybvt98jm65eu8jimwecd45bn7m0bvrt74az1d...be9</td>
                        <td>Gestor De Eventos</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>ybvt98jm65eu8omul054fcen7m0bvrt74az1d...296</td>
                        <td>Cliente</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>ybthu75l7pvz8omul054fcen7m0bvrt74az1d...u6t</td>
                        <td>Cliente</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
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
