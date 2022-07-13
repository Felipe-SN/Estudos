import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import http from 'http/instance';
import IPrato from 'interfaces/IPrato';
import IRestaurante from 'interfaces/IRestaurante';
import ITag from 'interfaces/ITag';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormPratos = () => {
  const [description, setDescription] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);
  const [nomePrato, setNomePrato] = useState('');
  const [restaurante, setRestaurante] = useState('');
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<ITag[]>([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      http.get<IPrato>(`pratos/${params.id}/`).then(response => {
        const data = response.data;

        setNomePrato(data.nome);
        setDescription(data.descricao);
        setTag(data.tag);
        setRestaurante(data.restaurante.toString());
      });
    }
  }, [params]);

  useEffect(() => {
    http
      .get<{ tags: ITag[] }>('tags/')
      .then(response => setTags(response.data.tags));
    http
      .get<IRestaurante[]>('restaurantes/')
      .then(response => setRestaurantes(response.data));
  }, []);

  const ifFileExists = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setImagem(event.target.files[0]);
      return;
    }
    setImagem(null);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('nome', nomePrato);
    formData.append('tag', tag);
    formData.append('descricao', description);
    formData.append('restaurante', restaurante);

    if (imagem) formData.append('imagem', imagem);

    if (params.id) {
      http
        .request({
          url: `pratos/${params.id}/`,
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        })
        .then(() => {
          alert('Prato atualizado com sucesso!');
        })
        .catch(error => console.log(error));
      return;
    }
    http
      .request({
        url: 'pratos/',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      })
      .then(() => {
        setDescription('');
        setImagem(null);
        setNomePrato('');
        setRestaurante('');
        setTag('');

        alert('Prato cadastrado com sucesso!');
      })
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
          Formulário de Pratos
        </Typography>
        <Box
          component="form"
          onSubmit={onSubmitForm}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            label="Nome do Prato"
            onChange={event => setNomePrato(event.target.value)}
            required
            value={nomePrato}
            variant="standard"
          />
          <TextField
            fullWidth
            label="Descrição do Prato"
            onChange={event => setDescription(event.target.value)}
            required
            value={description}
            variant="standard"
          />
          <FormControl fullWidth>
            <InputLabel id="select-tag">Tag</InputLabel>
            <Select
              labelId="select-tag"
              value={tag}
              onChange={event => setTag(event.target.value)}
            >
              {tags.map(tag => (
                <MenuItem key={tag.id} value={tag.value}>
                  {tag.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-Restaurante">Restaurante</InputLabel>
            <Select
              labelId="select-Restaurante"
              value={restaurante}
              onChange={event => setRestaurante(event.target.value)}
            >
              {restaurantes.map(restaurante => (
                <MenuItem key={restaurante.id} value={restaurante.id}>
                  {restaurante.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input type="file" onChange={ifFileExists} />
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

export default FormPratos;

