import styles from '@styles/modules/Header.module.scss';
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <header role='banner' className={styles.header}>
        <nav role='navigation' aria-label='navigation principale'>
          <ul>
            <li>
              <Link href='/'>Juliane Casier </Link>
            </li>
          </ul>
          <ul className={styles.menu}>
            <li>
              <Link href='/cv'>CV</Link>
            </li>
            <li>
              <Link href='/page/projets'>Projets</Link>
            </li>
            <li>
              <Link href='/page/contact'>Contact et Infos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
