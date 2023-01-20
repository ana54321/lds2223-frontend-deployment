import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function HeaderGestor() {
  const address = useAddress();
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1>TicketNFTs</h1>
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/Musica">Música</a>
              </li>
              <li>
                <a href="/Entretenimento">Entretenimento</a>
              </li>
              <li>
                <a href="/ArteTeatro">Arte &amp; Teatro</a>
              </li>
              <li>
                <a href="/Desporto">Desporto</a>
              </li>
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-profile d-flex align-items-center pe-0"
                  data-bs-toggle="dropdown"
                >
                  <span className="d-none d-md-block dropdown-toggle ps-2">
                    O Meu Perfil
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <span>TicketNFTs</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/UserExtraData"
                    >
                      <i className="bi bi-person" />
                      <span>Dados Adicionais</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/HistoricoBilhetes"
                    >
                      <i className="bi bi-ticket-perforated" />
                      <span>Histórico De Bilhetes</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <ConnectWallet
                // Some customization of the button style
                colorMode="light"
                // Ask users to sign in using auth after connecting their wallet
                auth={{
                  loginOptional: false,
                }}
              />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
