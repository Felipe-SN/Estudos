import ConfigurationPage from 'pages/ConfigurationPage';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Route, Routes as Paths } from 'react-router-dom';

const Routes = () => {
  return (
    <Paths>
      <Route path="/" element={<ConfigurationPage />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Paths>
  );
};

export default Routes;
