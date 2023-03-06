import { iconProps } from 'components/UI/variables';
import { Link } from 'react-router-dom';
import { logo } from 'data/img.json';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from 'components/Busca';
import classNames from 'classnames';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} className={styles.logo} alt="logo da Trato Tech" />
      <div className={styles.links}>
        <div>
          <Link
            to={'/'}
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
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
          {window.location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </Link>
      </div>
    </nav>
  );
}
