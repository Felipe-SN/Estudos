import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Anuncie from 'Pages/Anuncie';
import Carrinho from 'Pages/Carrinho';
import Categoria from 'Pages/Categoria';
import Home from 'Pages/Home';
import PaginaStandard from 'components/PaginaStandard';

export const router = createBrowserRouter([
  {
    element: <PaginaStandard />,
    path: '/',
    errorElement: (
      <h2>{'Ocorreu um erro! 😵‍💫 404 Recurso solicitado não encontrado'}</h2>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: '/anuncie', element: <Anuncie /> },
      { path: '/anuncie/:nomeCategoria', element: <Anuncie /> },
      { path: '/carrinho', element: <Carrinho /> },
      { path: '/categoria/:nomeCategoria', element: <Categoria /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
