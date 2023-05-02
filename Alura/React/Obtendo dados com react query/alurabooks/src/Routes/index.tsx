import { RouterProvider as Provider } from 'react-router-dom';
import { router } from './router';

export const RouterProvider = () => {
  return <Provider router={router} fallbackElement={<h3>CARREGANDO...</h3>} />;
};
