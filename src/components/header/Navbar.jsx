import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../img/CarpiCoin.png";

const Navbar = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              width="120"
              height="95"
              className="d-inline-block align-text-top"
            />
          </NavLink>
          <strong className="title">CarpiCoin</strong>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-5 navbarLink">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/noticiasCripto">
                  NoticiasCripto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Criptomonedas">
                  Criptomonedas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nft">
                  NFT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
