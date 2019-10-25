import React, { Component } from "react";
class Formulario extends Component {
  constructor() {
    super();
    this.nombreEventoRef = React.createRef();
    this.categoriaRef = React.createRef();
  }
  buscarEvento = e => {
    e.preventDefault();
    //crear objeto
    const datosFormulatio = {
      evento: this.nombreEventoRef.current.value,
      categoria: this.categoriaRef.current.value
    };

    //pasar por props
    this.props.hacerBusqueda(datosFormulatio);
  };
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

    return (
      <form onSubmit={this.buscarEvento}>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoria
          </legend>
          <div className="uk-column-1-3@m uk-margin" uk-margin="false">
            <div className="uk-margin" uk-margin="true">
              <input
                ref={this.nombreEventoRef}
                className="uk-input"
                type="text"
                placeholder="Nombre evento o ciudad"
              />
            </div>
            <div className="uk-margin" uk-margin="true">
              <select ref={this.categoriaRef} className="uk-select">
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
