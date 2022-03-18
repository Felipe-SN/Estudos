import React, { Component } from 'react';
import CardNota from './CardNota/CardNota';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of('Trabalho', 'Estudos').map((categoria, index) => {
          return (
            <li key={index}>
              <h2>{categoria}</h2>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
