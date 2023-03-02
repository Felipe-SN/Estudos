import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { iconProps } from 'components/UI/variables';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconProps} />
        <FaTwitter {...iconProps} />
        <FaInstagram {...iconProps} />
      </div>
      <span>Desenvolvido por Alura.</span>
    </footer>
  );
}
