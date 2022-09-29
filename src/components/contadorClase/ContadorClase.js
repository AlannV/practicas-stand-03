import React from "react";
import "./ContadorClase.css";

class ContadorClase extends React.Component {
  // llamamos al metodo constructor para poder utilizar estados
  // sin olvidarnos de pasarle "props"
  constructor(props) {
    // llamamos al metodo super para poder utilizar estados
    // sin olvidarnos de pasarle "props"
    super(props);
    // definimos nuestro estado inicial
    this.state = { count: 0 };

    // bindeamos las funciones con las que querramos modificar
    // el estado
    this.handleSuma = this.handleSuma.bind(this);
    this.handleResta = this.handleResta.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSuma() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  handleResta() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  handleReset() {
    this.setState((state) => ({
      count: 0,
    }));
  }

  render() {
    return (
      <div>
        <h1>Contador con componente de clase</h1>
        <p>El estado actual del contador es : {this.state.count}</p>
        {/* no olvidarse de llamar a las funciones con el .this */}
        {/* porque de otra manera no van a funcionar */}
        <button onClick={this.handleSuma}> + </button>
        <button onClick={this.handleResta}> - </button>
        <button onClick={this.handleReset}> reset state </button>
      </div>
    );
  }
}
export default ContadorClase;
