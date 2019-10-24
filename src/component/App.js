import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
class App extends Component {
  constructor() {
    super();
    this.token = "DQMN3QQLB6WN2YG7ZTE6";
    this.idioma = "es_ES";
    this.state = {
      categorias: []
    };
  }
  componentDidMount() {
    this.obtenerCategoria();
  }

  obtenerCategoria = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=${this.idioma}`;
    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categoria => {
        this.setState({
          categorias: categoria.categories
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Header titulo={"Evento"} />
        <div className="uk-container">
          <Formulario categorias={this.state.categorias} />
        </div>
      </div>
    );
  }
}

export default App;
