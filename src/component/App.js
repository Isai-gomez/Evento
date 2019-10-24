import React, { Component } from "react";
import Header from "./Header";
class App extends Component {
  componentDidMount() {
    this.obtenerCategoria();
  }

  obtenerCategoria = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=DQMN3QQLB6WN2YG7ZTE6&locale=es_ES`;
    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categoria => {
        console.log(categoria.categories);
      });
  };
  render() {
    return (
      <div className="App">
        <Header titulo={"Evento"} />
      </div>
    );
  }
}

export default App;
