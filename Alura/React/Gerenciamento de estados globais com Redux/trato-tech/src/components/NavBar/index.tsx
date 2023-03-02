import { iconProps } from 'components/UI/variables';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Busca from 'components/Busca';
import classNames from 'classnames';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            Página inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </a>
      </div>
    </nav>
  );
}
