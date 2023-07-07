import styles from '@styles/modules/Header.module.scss';

import { navItemsHeader, homeItemHeader } from '@utils/routes';
import NavItems from '@components/navItems';

const Header = () => {
  return (
    <>
      <header role='banner' className={`${styles.header}`}>
        <nav
          role='navigation'
          aria-label='navigation principale'
          className='section'
        >
          <NavItems navItems={homeItemHeader} cat='home' />
          <NavItems navItems={navItemsHeader} cat='navHeader' />
        </nav>
      </header>
    </>
  );
};
export default Header;
