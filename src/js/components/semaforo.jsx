import React from "react";
import { useState, useEffect } from "react";

function Semaforo() {
  const [colorSeleccionado, setColorSeleccionado] = useState("roja");

  const seleccionarColor = (color) => {
    setColorSeleccionado(color);
  };
  return (
    <div className="contenedor-principal">
      <div className="poste"></div>

      <div className="cuerpo-semaforo">
        <div
          className={`luz roja ${colorSeleccionado === "roja" ? "encendida" : ""}`}
          onClick={() => seleccionarColor("roja")}
        ></div>
        <div
          className={`luz amarilla ${colorSeleccionado === "amarilla" ? "encendida" : ""}`}
          onClick={() => seleccionarColor("amarilla")}
        ></div>
        <div
          className={`luz verde ${colorSeleccionado === "verde" ? "encendida" : ""}`}
          onClick={() => seleccionarColor("verde")}
        ></div>
      </div>
    </div>
  );
}

export default Semaforo;
