import React from "react";
import { useWeb3 } from "@3rdweb/hooks";
import Image from "next/image";
import metamask from "public/img/metamask.png";

export default function Header() {
  const { address, connectWallet } = useWeb3();

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
              <li>
                <Image
                  onClick={() => connectWallet("injected")}
                  src={metamask}
                  alt="login"
                  width={50}
                  height={50}/>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
