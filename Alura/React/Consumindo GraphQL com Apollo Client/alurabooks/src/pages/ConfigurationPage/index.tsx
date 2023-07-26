import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import ModalLogin from 'components/Modal/ModalLogin';
import ModalSingUp from 'components/Modal/ModalSingUp';
import NavigationBar from 'components/NavigationBar';
import useModalOpenState from 'state/recoil/hooks/useModalOpenState';

export default function ConfigurationPage() {
  const { modalSingInIsOpen } = useModalOpenState();
  return (
    <>
      {modalSingInIsOpen ? <ModalLogin /> : <ModalSingUp />}
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
