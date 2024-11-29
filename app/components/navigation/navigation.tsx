import { Link, Links, useOutletContext } from '@remix-run/react';
import styles from './navigation.module.scss';
import { FaBars, FaX } from 'react-icons/fa6';
import { useState } from 'react';
import { OutletContextType } from '~/root';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useOutletContext<OutletContextType>();

  console.log('User in Nav', user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* Left Links */}
      <ul className={styles.linksLeft}>
        <li className={styles.link}>
          <Link to="/maisonmy">La Maison My</Link>
        </li>
        <li className={styles.link}>
          <Link to="/carte">La carte</Link>
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
      <div className={styles.burger} onClick={toggleMenu}>
        <FaBars size={32} />
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <FaX size={32} onClick={toggleMenu} className={styles.close} />
        <ul>
          <li onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/maisonmy">La Maison My</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/menu">Le menu</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/histoire">L'histoire</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contact">Nous contacter</Link>
          </li>
        </ul>
      </div>

      {!!user ? (
        <p>Deconnexion</p>
      ) : (
        <Link to="/signin">
          <button className={styles.signin}>Mon compte My</button>
        </Link>
      )}
    </nav>
  );
}
