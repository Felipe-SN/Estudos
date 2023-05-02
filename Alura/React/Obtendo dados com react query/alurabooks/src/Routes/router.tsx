import { RouteObject, createBrowserRouter } from 'react-router-dom';
import ConfigurationPage from 'pages/ConfigurationPage';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ProfileArea from 'pages/ProfileArea';
import Requests from 'pages/ProfileArea/Requests';

const routesConfig: RouteObject[] = [
  {
    element: <ConfigurationPage />,
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
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
];

export const router = createBrowserRouter(routesConfig);
