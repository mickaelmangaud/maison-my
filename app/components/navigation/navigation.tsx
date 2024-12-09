import { Link, NavLink, useOutletContext } from '@remix-run/react';
import styles from './navigation.module.scss';
import { FaBars, FaX } from 'react-icons/fa6';
import { useState } from 'react';
import { MenuItem } from '../menu-item';
import { OutletContextType } from '~/root';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { role } = useOutletContext<OutletContextType>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* Left Links */}
      <ul className={styles.linksLeft}>
        <li>
          <MenuItem to="/account" label="Compte My" />
        </li>
        <li>
          <MenuItem to="/carte" label="La carte" />
        </li>
      </ul>

      {/* Logo */}
      <NavLink prefetch="viewport" to="/">
        <div className={styles.logo}>
          <img className={styles.img} src="/images/logo-my.png" />
        </div>
      </NavLink>

      {/* Right links */}
      <ul className={styles.links}>
        <li>
          <MenuItem to="/histoire" label="L'histoire" />
        </li>
        <li>
          <MenuItem to="/contact" label="Nous contacter" />
        </li>
      </ul>

      <div className={styles.burger} onClick={toggleMenu}>
        <FaBars size={50} className={styles.bars} color="white" />
      </div>

      {/* Mobile Menu - Start */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <FaX size={32} onClick={toggleMenu} className={styles.close} />
        <ul>
          <li onClick={toggleMenu}>
            <MenuItem to="/" label="Accueil" />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/account" label="Compte My" />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/carte" label="La carte" />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/histoire" label="L'histoire" />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/contact" label="Nous contacter" />
          </li>
        </ul>
      </div>
      {/* Mobile Menu - End */}
      {role === 'admin' && (
        <Link to="/admin" className={styles.adminLink}>
          <div className={styles.admin}>
            <img src="/images/batman.png" width={50} alt="admin-logo" />
          </div>
        </Link>
      )}
    </nav>
  );
}
