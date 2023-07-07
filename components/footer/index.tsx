import styles from '@styles/modules/Footer.module.scss';
import { navItemsFooter } from '@utils/routes';
import NavItems from '@components/navItems';
const Footer = () => {
  return (
    <footer role='contentinfo' className={styles.footer}>
      <div className={`${styles.listWrapper} section`}>
        <NavItems navItems={navItemsFooter} />
      </div>
    </footer>
  );
};
export default Footer;
