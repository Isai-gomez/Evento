import React, { Component } from "react";
import Header from "./Header";
import Eventos from "./Eventos";
import Formulario from "./Formulario";
class App extends Component {
  constructor() {
    super();
    this.token = "DQMN3QQLB6WN2YG7ZTE6";
    this.idioma = "es_ES";
    this.ordenar = "date";
    this.state = {
      categorias: [],
      events: []
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

  hacerBusqueda = async busqueda => {
    console.log(busqueda);
    //let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}`;
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.evento}&categories=${busqueda.categoria}&token=${this.token}`;
    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(evento => {
        this.setState({ events: evento.events });
      });
  };

  render() {
    return (
      <div className="App">
        <Header titulo={"Evento"} />
        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}
            hacerBusqueda={this.hacerBusqueda}
          />
          <Eventos eventos={this.state.events}></Eventos>
        </div>
      </div>
    );
  }
}

export default App;
