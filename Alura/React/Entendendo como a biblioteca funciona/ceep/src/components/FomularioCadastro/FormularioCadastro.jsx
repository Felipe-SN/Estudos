import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = '';
  }

  handleMudancaDeTitulo(evento) {
    const novoTitulo = evento.target.value;
    this.titulo = novoTitulo;
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this.handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
