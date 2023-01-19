import Footer from 'components/Footer';
import ModalSingUp from 'components/Modal/ModalSingUp';
import NavigationBar from 'components/NavigationBar';
import { Outlet } from 'react-router-dom';

const ConfigurationPage = () => {
  return (
    <main>
      <ModalSingUp />
      <NavigationBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default ConfigurationPage;
