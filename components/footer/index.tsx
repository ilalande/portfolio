import styles from '@styles/modules/Footer.module.scss';
import Link from 'next/link';
import { navItemsFooter } from '@utils/routes';
import NavItems from '@components/navItems';
const Footer = () => {
  return (
    <footer role='contentinfo' className={styles.footer}>
      <div className={`${styles.listWrapper} section`}>
        <NavItems navItems={navItemsFooter} cat='navFooter' />
      </div>
    </footer>
  );
};
export default Footer;
