import React from "react";
import "../App.css";

function Registrarse() {
  return (
    <div className="registro">
      <div className="titulo">
        <h2>Registrarse</h2>
      </div>
      <div className="logo-registro">
        <img
          className="logo-registro"
          src="/img/logo-registrarse.png"
          alt="logo"
          width="50"
          height="50"
        />
      </div>
      <br></br>
      <div className="campos-registro">
        <label className="campo-registro">Nombres</label>
        <br></br>
        <input className="input-registro" type="text"></input>
        <br></br>
        <label className="campo-registro">Apellidos</label>
        <br></br>
        <input className="input-registro" type="text"></input>
        <br></br>
        <label className="campo-registro">Cédula</label>
        <br></br>
        <input className="input-registro" type="text"></input>
        <br></br>
        <label className="campo-registro">Fecha de nacimiento</label>
        <br></br>
        <input className="input-nacimiento" type="date"></input>
        <br></br>
        <br></br>
        <br></br>
        <button className="btn-save">Guardar</button>
      </div>
    </div>
  );
}

export default Registrarse;
