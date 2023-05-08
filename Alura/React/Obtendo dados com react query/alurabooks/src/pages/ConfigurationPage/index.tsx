import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import ModalLogin from 'components/Modal/ModalLogin';
import ModalSingUp from 'components/Modal/ModalSingUp';
import NavigationBar from 'components/NavigationBar';
import useModalOpenState from 'state/hooks/useModalOpenState';

export default function ConfigurationPage() {
  const { modalSingInIsOpen } = useModalOpenState();
  return (
    <main>
      {modalSingInIsOpen ? <ModalLogin /> : <ModalSingUp />}
      <NavigationBar />
      <Outlet />
      <Footer />
    </main>
  );
}
