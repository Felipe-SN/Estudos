import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaStandard from 'components/PaginaStandard';

const router = createBrowserRouter([
  {
    element: <PaginaStandard />,
    children: [
      {
        path: '/',
        element: <span>TESTE</span>,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
