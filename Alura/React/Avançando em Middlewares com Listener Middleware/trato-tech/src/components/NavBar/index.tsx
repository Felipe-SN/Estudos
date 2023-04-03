import { iconProps } from 'components/UI/variables';
import { Link, useLocation } from 'react-router-dom';
import { logo } from 'data/img.json';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import { router } from 'routes';
import Busca from 'components/Busca';
import classNames from 'classnames';
import styles from './NavBar.module.scss';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <img
        src={logo}
        className={styles.logo}
        alt="logo da Trato Tech"
        onClick={() => router.navigate('/')}
      />
      <div className={styles.links}>
        <div>
          <Link
            to={'/'}
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === '/',
            })}
          >
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to={'/carrinho'}>
          {location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </Link>
      </div>
    </nav>
  );
}
