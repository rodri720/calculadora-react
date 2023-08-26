import React, { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { evaluate } from 'mathjs';

function App() {
  const [input, setinput] = useState('');

  const agregarInput = valor => {
    setinput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setinput(evaluate(input));
    } else {
      alert('Por favor ingrese un valor');
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        {/* Logo aquí */}
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />

        <div className="fila">
          
          <div className="columna">
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
           
          </div>
          <div className="columna">
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
          </div>
          <div className="columna">
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={calcularResultado}>=</Boton>
          </div>
          <div className="columna">
            <Boton manejarClick={agregarInput}>+</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
            <BotonClear manejarClear={() => setinput('')}>Clear</BotonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
