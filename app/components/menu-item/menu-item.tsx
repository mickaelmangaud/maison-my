import { NavLink } from '@remix-run/react';
import styles from './menu-item.module.scss';

export const MenuItem = ({ to, label }: { to: string; label: string }) => {
  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'menuItem ' + styles.activeLink : 'menuItem ' + styles.link;

  return (
    <div className={styles.menuItem}>
      <NavLink prefetch="intent" to={to} className={getLinkClassName}>
        {label}
      </NavLink>
    </div>
  );
};
