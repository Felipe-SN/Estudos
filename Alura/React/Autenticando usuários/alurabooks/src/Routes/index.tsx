import ConfigurationPage from 'pages/ConfigurationPage';
import Home from 'pages/Home';
import { Route, Routes as Paths } from 'react-router-dom';

const Routes = () => {
  return (
    <Paths>
      <Route path="/" element={<ConfigurationPage />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<h2>ERROR 404</h2>} />
    </Paths>
  );
};

export default Routes;
