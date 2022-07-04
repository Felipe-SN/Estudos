import { Button, TextField } from '@mui/material';
import axios from 'axios';
import IRestaurante from 'interfaces/IRestaurante';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormularioRestaurantes = () => {
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      axios
        .get<IRestaurante>(
          `http://localhost:8000/api/v2/restaurantes/${params.id}/`
        )
        .then(response => setNomeRestaurante(response.data.nome));
    }
  }, [params]);

  const [nomeRestaurante, setNomeRestaurante] = useState('');

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (params.id) {
      axios
        .put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => alert('Restaurante Atualizado com Sucesso!'))
        .catch(error => console.log(error));
      return;
    }
    axios
      .post('http://localhost:8000/api/v2/restaurantes/', {
        nome: nomeRestaurante,
      })
      .then(() => alert('Restaurante Cadastrado com Sucesso!'))
      .catch(error => console.log(error));
    return;
  };

  return (
    <form onSubmit={onSubmitForm}>
      <TextField
        value={nomeRestaurante}
        onChange={event => setNomeRestaurante(event.target.value)}
        id="standard-basic"
        label="Nome do Restaurante"
        variant="standard"
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  );
};

export default FormularioRestaurantes;
