'use client';
import styles from '@styles/modules/NavItems.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IRoutes } from '@custom-types/routes';
import { useEffect } from 'react';
interface INavItemsProps {
  navItems: IRoutes[];
  cat: string;
}

const NavItems = ({ navItems, cat }: INavItemsProps) => {
  let pathname = usePathname() || '/';

  return (
    <div className={styles.navItems}>
      {cat === 'navHeader' ? (
        <div className={styles.headerWrapper}>
          <ul className={styles.homeItemHeader}>
            {pathname !== '/' ? (
              <li>
                <Link href={navItems[0].path}>{navItems[0].text}</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <ul className={styles.menuItemsHeader}>
            {navItems
              .filter((item) => item.name !== 'home')
              .map((item) => {
                return (
                  <li
                    key={item.id}
                    className={
                      pathname === item.path ? styles.activeLinkHeader : null
                    }
                  >
                    {pathname !== item.path ? (
                      <Link href={item.path}>{item.text}</Link>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      ) : (
        <div></div>
      )}

      {cat === 'navFooter' ? (
        <div>
          <ul className={styles.menuFooter}>
            {navItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className={
                    pathname === item.path ? styles.activeLinkFooter : null
                  }
                >
                  {pathname !== item.path ? (
                    <Link href={item.path}>{item.text}</Link>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default NavItems;
