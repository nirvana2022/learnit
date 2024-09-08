import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <div className="logo-app">
          <img className="logo" src="/img/logo-learnit.png" alt="logo" />
        </div>
        <div className="boton-responsive">
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
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-2">
            <li className="nav-item">
              <Link className="nav-link" to="/registrarse">
                <button className="btn-menu">Registrarse</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">
                <button className="btn-menu">Cursos</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/soporte">
                <button className="btn-menu">Soporte</button>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btn-buscar" type="submit">
                <img
                  className="logo-buscar"
                  src="/img/logo-buscar.png"
                  alt=""
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="div-home" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-2">
          <li className="nav-item">
            <Link className="logo-buscar" to="/">
              <button className="btn-home">
                <img
                  className="logo-buscar"
                  src="/img/icono-home.png"
                  alt=""
                  width="20"
                  height="20"
                />
                <br></br>Inicio
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
