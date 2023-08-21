import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Categories from 'pages/Categories';
import ConfigurationPage from 'pages/ConfigurationPage';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import BookDetails from 'pages/BookDetails';

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
        path: 'perfil/:slug',
        element: <Profile />,
      },
      {
        path: 'categorias/:slug',
        element: <Categories />,
      },
      {
        path: 'livro/:slug',
        element: <BookDetails />,
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);
