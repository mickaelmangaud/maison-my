import { Link } from '@remix-run/react';

import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.linksLeft}>
        <li className={styles.link}>
          <Link to="/">La Maison My</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Le menu</Link>
        </li>
      </ul>
      <Link to="/">
        <div className={styles.logo}>
          <img className={styles.img} src="/images/my_logo.png" />
        </div>
      </Link>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link to="/histoire">L'histoire</Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">Nous contacter</Link>
        </li>
      </ul>
    </nav>
  );
}
