'use client';
import styles from '@styles/modules/NavItems.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IRoutes } from '@custom-types/routes';
interface INavItemsProps {
  navItems: IRoutes[];
  cat: string;
}

const NavItems = ({ navItems, cat }: INavItemsProps) => {
  let pathname = usePathname() || '/';

  return (
    <ul className={styles.navItems}>
      {navItems.map((item) => {
        return (
          <>
            {cat === 'home' && pathname === '/' ? (
              <li> </li>
            ) : (
              <li
                key={item.id}
                className={pathname === item.path ? styles.activeLink : null}
              >
                {pathname !== item.path ? (
                  <Link href={item.path}>{item.text}</Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};
export default NavItems;
