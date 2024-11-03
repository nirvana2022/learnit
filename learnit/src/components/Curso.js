import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Curso() {
  return (
    <div className="estudiante">
      <div className="cursos-container">
        <div className="cursos-disponibles">
          <div className="caja-curso">
            <h3 className="titulo-estudiante">Cursos disponibles</h3>
            <div className="curso">
              <h4>JavaScript</h4>
              <p>Descripción del curso</p>
              <div className="progreso-curso">
                <p>Progreso: 50%</p>
                <progress value="70" max="100"></progress>{" "}
              </div>
              <button className="btn-curso-oferta">Inscribirse</button>
            </div>
          </div>
        </div>

        <div className="cursos-inscritos">
          <div className="caja-curso">
            <h3>Cursos inscritos</h3>
            <div className="curso">
              <h4>Curso de React</h4>
              <p>Descripción del curso</p>
              <p>Progreso: 50%</p>
              <progress value="50" max="100"></progress>
              <button className="btn-curso-ver">Ver curso</button>
            </div>
            <div className="curso">
              <h4>Curso de Node.js</h4>
              <p>Descripción del curso</p>
              <p>Progreso: 30%</p>
              <progress value="30" max="100"></progress>
              <button className="btn-curso-ver">Ver curso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curso;
