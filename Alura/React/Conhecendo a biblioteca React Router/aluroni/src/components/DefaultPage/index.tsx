import styles from './DefaultPage.module.scss';
import theme from 'styles/tema.module.scss';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={theme.container}>
        <Outlet />
      </div>
    </>
  );
}

