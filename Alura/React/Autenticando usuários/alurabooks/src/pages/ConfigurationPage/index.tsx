import { Outlet } from 'react-router-dom';
import categories from 'data/categorias.json';
import Footer from 'components/Footer';
import ModalLogin from 'components/Modal/ModalLogin';
import ModalSingUp from 'components/Modal/ModalSingUp';
import NavigationBar from 'components/NavigationBar';
import NewsLetter from 'components/NewsLatter';
import sortByLength from 'helpers/sortByLength';
import TagSection from 'components/TagSection';
import useModalOpenState from 'state/hooks/useModalOpenState';

const ConfigurationPage = () => {
  const { modalSingInIsOpen } = useModalOpenState();
  return (
    <main>
      {modalSingInIsOpen ? <ModalLogin /> : <ModalSingUp />}
      <NavigationBar />
      <Outlet />
      <TagSection categories={sortByLength(categories, 'name')} />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default ConfigurationPage;
