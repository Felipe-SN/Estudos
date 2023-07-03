import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import ModalLogin from 'components/Modal/ModalLogin';
import ModalSingUp from 'components/Modal/ModalSingUp';
import NavigationBar from 'components/NavigationBar';
import useModalOpenState from 'state/recoil/hooks/useModalOpenState';
import styled from 'styled-components';

export default function ConfigurationPage() {
  const { modalSingInIsOpen } = useModalOpenState();
  return (
    <Main>
      {modalSingInIsOpen ? <ModalLogin /> : <ModalSingUp />}
      <NavigationBar />
      <Outlet />
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  display: grid;
`;
