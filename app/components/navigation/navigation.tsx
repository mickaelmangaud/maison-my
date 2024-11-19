import { Link } from '@remix-run/react';

import styles from './navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      {/* Left Links */}
      <ul className={styles.linksLeft}>
        <li className={styles.link}>
          <Link to="/maisonmy">La Maison My</Link>
        </li>
        <li className={styles.link}>
          <Link to="/menu">Le menu</Link>
        </li>
      </ul>
      {/* Logo */}
      <Link to="/">
        <div className={styles.logo}>
          <img className={styles.img} src="/images/my_logo.png" />
        </div>
      </Link>
      {/* Right links */}
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
