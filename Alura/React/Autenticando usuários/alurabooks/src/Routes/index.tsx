import ConfigurationPage from 'pages/ConfigurationPage';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ProfileArea from 'pages/ProfileArea';
import Requests from 'pages/ProfileArea/Requests';
import {
  createBrowserRouter,
  RouterProvider as Provider,
} from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <ConfigurationPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'perfil',
        element: <ProfileArea />,
        children: [
          {
            path: 'pedidos',
            element: <Requests />,
          },
          {
            path: 'trocas',
            element: <Requests />,
          },
          {
            path: 'cupons',
            element: <Requests />,
          },
          {
            path: 'detalhes',
            element: <Requests />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const RouterProvider = () => {
  return <Provider router={router} fallbackElement={<h3>CARREGANDO...</h3>} />;
};
