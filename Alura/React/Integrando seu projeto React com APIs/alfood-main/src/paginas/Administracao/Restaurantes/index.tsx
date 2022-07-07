import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import http from 'http/instance';
import IRestaurante from 'interfaces/IRestaurante';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    http
      .get<IRestaurante[]>('restaurantes/')
      .then(response => {
        setRestaurantes(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const excluir = (restauranteParaExcluir: IRestaurante) => {
    http
      .delete(`restaurantes/${restauranteParaExcluir.id}/`)
      .then(() => {
        const listaRestaurantes = restaurantes.filter(
          restaurante => restaurante.id !== restauranteParaExcluir.id
        );
        setRestaurantes([...listaRestaurantes]);
        alert('Restaurante Excluído com Sucesso!');
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
                <Link to={`/admin/restaurantes/${restaurante.id}`}>
                  <Button variant="outlined">Editar</Button>
                </Link>
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

export default AdminRestaurantes;
