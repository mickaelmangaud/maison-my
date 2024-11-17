import { Link } from '@remix-run/react';

import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.linksLeft}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/my_logo.png" />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
