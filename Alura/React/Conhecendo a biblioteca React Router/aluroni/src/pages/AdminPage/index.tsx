// Pagina criada para o exercício de utilização de parâmetros.

import { Navigate, useParams } from 'react-router-dom';

export default function AdminPage() {
  const { user } = useParams();
  if (user === 'Borracha') {
    return (
      <>
        <h1>Pagina Administrativa</h1>
        <h2>{`Bem Vindo ${user}!`}</h2>
      </>
    );
  }
  return <Navigate to={'/'} />;
}

