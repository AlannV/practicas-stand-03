import React, { useState } from "react";
import "./Card.css";

function Card() {
  //creamos el estado city que mas tarde vamos a graficar
  //seteamos por defecto las propiedades que queremos
  const [city, setCity] = useState({
    name: "",
    temp_max: "",
    temp_min: "",
  });

  // creamos un estado para guardar los valores dentro de los inputs
  const [input, setInput] = useState("");

  function handleInput(e) {
    // el e.preventDefault lo usamos para evitar el comportamiento
    // predeterminado que puede tener un evento
    e.preventDefault();
    setInput({
      ...input,
      // e.target.name hace referencia a la propiedad "name" de nuestro
      // input
      // e.target.value hace referencia al valor ingresado en el input
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //guardamos los valores de nuestro estado en el que guardamos los
    //inputs en el estado city, que vamos a usar para graficar
    setCity({
      name: input.name,
      temp_max: input.temp_max,
      temp_min: input.temp_min,
    });
  }

  return (
    <div className="contenedor-principal">
      Formulario creacion de ciudad:
      <br />
      <br />
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Ciudad : </label>
          <input
            name="name"
            placeholder="ingrese ciudad..."
            onChange={(e) => handleInput(e)}
            type="text"
          />
        </div>
        <br />
        <div>
          <label>Temperatura maxima : </label>
          <input
            name="temp_max"
            placeholder="ingrese la temperatura maxima"
            onChange={(e) => handleInput(e)}
            type="text"
          />
        </div>
        <br />
        <div>
          <label>Temperatura minima : </label>
          <input
            name="temp_min"
            placeholder="ingrese la temperatura minima"
            onChange={(e) => handleInput(e)}
            type="text"
          />
        </div>
        <button type="submit"> Guardar Ciudad </button>
        <button type="reset"> Limpiar Inputs</button>
      </form>
      {/* Graficamos el estado city como si fuese una card */}
      <div className="card">
        ciudad : {city.name}
        <br />
        temp_min : {city.temp_min}
        <br />
        temp_max : {city.temp_max}
      </div>
    </div>
  );
}

export default Card;
