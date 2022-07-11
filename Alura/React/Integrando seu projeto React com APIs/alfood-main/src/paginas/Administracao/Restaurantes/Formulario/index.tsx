import { Box, Button, TextField, Typography } from '@mui/material';
import http from 'http/instance';
import IRestaurante from 'interfaces/IRestaurante';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormRestaurantes = () => {
  const params = useParams();
  const [nomeRestaurante, setNomeRestaurante] = useState('');

  useEffect(() => {
    if (params.id) {
      http
        .get<IRestaurante>(`restaurantes/${params.id}/`)
        .then(response => setNomeRestaurante(response.data.nome));
    }
  }, [params]);

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (params.id) {
      http
        .put(`restaurantes/${params.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => alert('Restaurante Atualizado com Sucesso!'))
        .catch(error => console.log(error));
      return;
    }
    http
      .post('restaurantes/', {
        nome: nomeRestaurante,
      })
      .then(() => alert('Restaurante Cadastrado com Sucesso!'))
      .catch(error => console.log(error));
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          placeItems: 'center',
        }}
      >
        <Typography component="h1" variant="h6">
          Formulário de Restaurante
        </Typography>
        <Box component="form" onSubmit={onSubmitForm} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Nome do Restaurante"
            onChange={event => setNomeRestaurante(event.target.value)}
            required
            value={nomeRestaurante}
            variant="standard"
          />
          <Button
            fullWidth
            sx={{ marginTop: 1 }}
            type="submit"
            variant="outlined"
          >
            Salvar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FormRestaurantes;
