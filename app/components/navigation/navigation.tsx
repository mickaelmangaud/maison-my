import { NavLink } from '@remix-run/react';
import styles from './navigation.module.scss';
import { FaBars, FaX } from 'react-icons/fa6';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClassName = ({ isActive }: { isActive: boolean }) => (isActive ? styles.activeLink : styles.link);

  return (
    <nav className={styles.nav}>
      {/* Left Links */}
      <ul className={styles.linksLeft}>
        <li className={styles.link}>
          <NavLink className={getLinkClassName} to="/account">
            Compte My
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink className={getLinkClassName} to="/carte">
            La carte
          </NavLink>
        </li>
      </ul>
      {/* Logo */}
      <NavLink to="/">
        <div className={styles.logo}>
          <img className={styles.img} src="/images/my_logo.png" />
        </div>
      </NavLink>
      {/* Right links */}
      <ul className={styles.links}>
        <li className={styles.link}>
          <NavLink className={getLinkClassName} to="/histoire">
            L&apos;histoire
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink className={getLinkClassName} to="/contact">
            Nous contacter
          </NavLink>
        </li>
      </ul>
      <div className={styles.burger} onClick={toggleMenu}>
        <FaBars size={50} className={styles.bars} color="white" />
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <FaX size={32} onClick={toggleMenu} className={styles.close} />
        <ul>
          <li onClick={toggleMenu}>
            <NavLink className={getLinkClassName} to="/">
              Accueil
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink className={getLinkClassName} to="/account">
              Compte My
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink className={getLinkClassName} to="/carte">
              La carte
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink className={getLinkClassName} to="/histoire">
              L&apos;histoire
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink className={getLinkClassName} to="/contact">
              Nous contacter
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
