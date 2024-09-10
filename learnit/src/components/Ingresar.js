import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Ingresar() {
  return (
    <div className="ingreso">
      <div className="titulo">
        <h2>Ingreso</h2>
      </div>
      <div className="logo-ingreso">
        <img
          className="logo-ingreso"
          src="/img/logo-ingreso.png"
          alt="logo"
          width="100"
          height="80"
        />
      </div>

      <br></br>
      <div className="campos-registro">
        <label className="campo-registro">Usuario</label>
        <br></br>
        <input className="input-registro" type="text"></input>
        <br></br>
        <label className="campo-registro">Contraseña</label>
        <br></br>
        <input className="input-registro" type="password"></input>
        <br></br>
        <br></br>
        <br></br>
        <button className="btn-save">Ingresar</button>
        <br></br>
        <Link className="text-link" to="/registrarse">
          ¿Olvidaste tu constraseña?
        </Link>
        <br></br>
        <Link className="text-link" to="/registrarse">
          Registrarse
        </Link>
      </div>
    </div>
  );
}

export default Ingresar;
