import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = ({ manejarClear, children }) => {
    return (
      <button className="boton-clear" onClick={manejarClear}>
        {children}
      </button>
    )  
}
export default BotonClear;