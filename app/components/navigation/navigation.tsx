import { Link } from '@remix-run/react';
import styles from './navigation.module.scss';
import { FaAlignJustify } from 'react-icons/fa6';

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
      <div className={styles.burger}>
        <FaAlignJustify size={42} />
      </div>
    </nav>
  );
}
