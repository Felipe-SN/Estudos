import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Categories from 'pages/Categories';
import ConfigurationPage from 'pages/ConfigurationPage';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Requests from 'pages/Requests';
import RequestsList from 'pages/Requests/RequestsList';

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
        path: 'meus-pedidos',
        element: <Requests />,
        children: [
          {
            path: ':slug',
            element: <RequestsList />,
          },
        ],
      },
      {
        path: 'categorias/:slug',
        element: <Categories />,
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);
