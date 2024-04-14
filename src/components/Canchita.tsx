import React from "react";
import "./Canchita.css"; // Archivo CSS para estilos

function Canchita() {
  return (
    <div className="cancha-container">
        
    <div className="cancha">
      <div className="campo">
        <div className="area-izquierda"></div>

        <div className="area-derecha"></div>

        <div className="arco-izquierdo"></div>
        <div className="arco-derecho"></div>

        <div className="linea-media"></div>
      </div>

      <div className="arquero"></div>

      <div className="defensor-izquierdo"></div>

      <div className="defensor-derecho"></div>

      <div className="mediocampista"></div>

      <div className="delantero"></div>
    </div>
    </div>
  );
}

export default Canchita;
