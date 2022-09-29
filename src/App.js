import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Contador from "./components/contador/contador";
import ContadorClase from "./components/contadorClase/ContadorClase.js";

function App() {
  return (
    <div className="App">
      <Contador />
      <br />
      <hr />
      <ContadorClase />
      <br />
      <hr />
      <Card />
    </div>
  );
}

export default App;
