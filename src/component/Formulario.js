import React, { Component } from "react";
class Formulario extends Component {
  mostrarOpciones = key => {
    const categori = this.props.categorias[key];
    const { id, name_localized } = categori;
    if (!id || !name_localized) return null;
    return (
      <option key={id} value={id}>
        {name_localized}
      </option>
    );
  };
  render() {
    const categoria = Object.keys(this.props.categorias);
    console.log(categoria);
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoria
          </legend>
          <div className="uk-column-1-3@m uk-margin" uk-margin="false">
            <div className="uk-margin" uk-margin="true">
              <input
                className="uk-input"
                type="text"
                placeholder="Nombre evento o ciudad"
              />
            </div>
            <div className="uk-margin" uk-margin="true">
              <select className="uk-select">
                {categoria.map(this.mostrarOpciones)}
              </select>
            </div>
            <div className="uk-margin" uk-margin="true">
              <button className="uk-input uk-button-danger">Buscar</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Formulario;
