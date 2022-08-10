import React from 'react';

const Formulario = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        data-input-nome=""
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled type="submit">
        Adicionar
      </button>
    </form>
  );
};

export default Formulario;
