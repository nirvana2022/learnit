import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Registrarse from "./components/Registrarse";
import Soporte from "./components/Soporte";
import Ingresar from "./components/Ingresar";
import Curso from "./components/Curso";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/ingreso" element={<Ingresar />} />
        <Route path="/curso" element={<Curso />} />
      </Routes>
    </Router>
  );
}

export default App;
