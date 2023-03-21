import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';
import styles from './PaginaStandard.module.scss';
import Footer from 'components/Footer';

export default function PaginaStandard() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
