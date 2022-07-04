import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import axios from 'axios';
import IRestaurante from 'interfaces/IRestaurante';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdministracaoRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    axios
      .get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
      .then(response => {
        setRestaurantes(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const excluir = (restauranteParaExcluir: IRestaurante) => {
    axios
      .delete(
        `http://localhost:8000/api/v2/restaurantes/${restauranteParaExcluir.id}/`
      )
      .then(() => {
        const listaRestaurantes = restaurantes.filter(
          restaurante => restaurante.id !== restauranteParaExcluir.id
        );
        setRestaurantes([...listaRestaurantes]);
        alert('Restaurante Excluido com Sucesso!');
      })
      .catch(error => console.log(error));
    return;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map(restaurante => (
            <TableRow key={restaurante.id}>
              <TableCell>{restaurante.nome}</TableCell>
              <TableCell>
                <Button variant="outlined">
                  <Link to={`/admin/restaurantes/${restaurante.id}`}>
                    Editar
                  </Link>
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => excluir(restaurante)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdministracaoRestaurantes;
