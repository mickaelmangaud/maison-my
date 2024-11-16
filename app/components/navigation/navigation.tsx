import { Link } from '@remix-run/react';

import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
