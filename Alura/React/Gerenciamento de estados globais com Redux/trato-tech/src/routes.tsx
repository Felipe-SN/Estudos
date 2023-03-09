import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaStandard from 'components/PaginaStandard';
import Home from 'Pages/Home';
import Categoria from 'Pages/Categoria';
import Carrinho from 'Pages/Carrinho';

export const router = createBrowserRouter([
  {
    element: <PaginaStandard />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/categoria/:nomeCategoria',
        element: <Categoria />,
      },
      {
        path: '/carrinho',
        element: <Carrinho />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
