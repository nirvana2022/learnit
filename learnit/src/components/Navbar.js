import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <img
          className="logo"
          src="/img/logo-learnit.png"
          alt="logo"
          width="150"
          height="50"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Registrarse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Soporte
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              {/* Agrupa el campo de entrada y el botón */}
              <input
                type="search"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                <img src="/img/logo-buscar.png" alt="" width="35" height="35" />
              </button>
            </div>
          </form>
          <button className="btn btn-primary ms-2">
            <img src="/img/icono-home.png" alt="#" width="35" height="35" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
