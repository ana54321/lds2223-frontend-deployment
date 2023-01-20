import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function HeaderAdministrative() {
  const address = useAddress();

  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/HomepageAdmin" className="logo d-flex align-items-center">
            <h1>TicketNFTs</h1>
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/DashboardAdmin">Dashboard</a>
              </li>
              <li>
                <a href="/EventosAdmin">Eventos</a>
              </li>
              <li>
                <a href="/LocaisEventosAdmin">Locais de Eventos</a>
              </li>
              <li>
                <a href="/DadosUsersAdmin">Dados dos Utilizadores</a>
              </li>
              <li>
                <a href="/DadosOrgAdmin">Dados das Organizações</a>
              </li>
              <li>-----------</li>
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
