import React from 'react';
import '../hojas-de-estilo/Pantalla.css'; // Use lowercase 'p' for 'pantalla.css'

const Pantalla = ({ input }) => {
  return (
    <div className="input">
      {input}
    </div>
  );
};

export default Pantalla;
