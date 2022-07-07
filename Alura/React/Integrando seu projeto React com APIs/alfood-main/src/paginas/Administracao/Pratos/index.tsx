import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import http from 'http/instance';
import IPrato from 'interfaces/IPrato';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPratos = () => {
  const [prato, setPrato] = useState<IPrato[]>([]);

  useEffect(() => {
    http
      .get<IPrato[]>('pratos/')
      .then(response => {
        setPrato(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const excluir = (pratoParaExcluir: IPrato) => {
    http
      .delete(`pratos/${pratoParaExcluir.id}/`)
      .then(() => {
        const listaPrato = prato.filter(
          prato => prato.id !== pratoParaExcluir.id
        );
        setPrato([...listaPrato]);
        alert('Prato Excluído com Sucesso!');
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
            <TableCell>Tag</TableCell>
            <TableCell>Imagem</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prato.map(prato => (
            <TableRow key={prato.id}>
              <TableCell>{prato.nome}</TableCell>
              <TableCell>{prato.tag}</TableCell>
              <TableCell>
                <a href={prato.imagem} rel="noreferrer" target="_blank">
                  <Button variant="outlined">Ver Mais</Button>
                </a>
              </TableCell>
              <TableCell>
                <Link to={`/admin/pratos/${prato.id}`}>
                  <Button variant="outlined">Editar</Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => excluir(prato)}
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

export default AdminPratos;
