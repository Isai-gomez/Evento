import React, { Component } from "react";
class Formulario extends Component {
  render() {
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
              <select className="uk-select"></select>
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
