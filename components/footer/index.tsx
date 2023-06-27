import styles from '@styles/modules/Footer.module.scss';
import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <footer role='contentinfo' className={styles.footer}>
        <ul>
          {' '}
          <li>
            <Link href='/page/cv'>Mentions légales</Link>
          </li>
          <li>
            <Link href='/page/accessibilite'>
              Accessibilité : partiellement conforme
            </Link>
          </li>
          <li>
            <Link href='/page/plan-du-site'>Plan du site</Link>
          </li>
          <li>
            <Link href='/page/contact'>Contact</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
