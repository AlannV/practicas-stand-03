import React from "react";
import { useState } from "react";

function Contador() {
  // count es el nombre del estado
  // setCount es el nombre de la funcion que va a cambiar nuestro estado
  // dentro de los parentesis de useState, definimos el valor inicial
  // de nuestro estado

  const [count, setCount] = useState(0);

  // suma una unidad a nuestro estado
  const handleSuma = () => {
    setCount((count) => count + 1);
  };

  // resta una unidad a nuestro estado
  function handleResta() {
    setCount((count) => count - 1);
  }

  // vuelve a cero nuestro estado
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="contador">
      <h1>Contador con componente funcional</h1>
      <p>El estado actual del contador es : {count}</p>
      <button onClick={() => handleSuma()}> + </button>
      <button onClick={() => handleResta()}> - </button>
      <button onClick={() => handleReset()}> reset state</button>
    </div>
  );
}

export default Contador;
