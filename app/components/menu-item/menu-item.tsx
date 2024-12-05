import { NavLink } from '@remix-run/react';
import styles from './menu-item.module.scss';

export const MenuItem = ({ to, label }: { to: string; label: string }) => {
  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'menuItem ' + styles.activeLink : 'menuItem ' + styles.link;

  return (
    <div id={styles.menuItem}>
      <NavLink prefetch="viewport" to={to} className={getLinkClassName}>
        {label}
      </NavLink>
    </div>
  );
};
