import { Link, NavLink, useOutletContext } from '@remix-run/react';
import { FaBars, FaX } from 'react-icons/fa6';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OutletContextType } from '~/root';
import styles from './navigation.module.scss';
import { MenuItem } from '../menu-item';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { role } = useOutletContext<OutletContextType>();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* Left Links */}
      <ul className={styles.linksLeft}>
        <li>
          <MenuItem to="/account" label={t('navigation.account')} />
        </li>
        <li>
          <MenuItem to="/menu" label={t('navigation.menu')} />
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
          <MenuItem to="/histoire" label={t('navigation.story')} />
        </li>
        <li>
          <MenuItem to="/contact" label={t('navigation.contactUs')} />
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
            <MenuItem to="/" label={t('navigation.home')} />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/account" label={t('navigation.account')} />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/menu" label={t('navigation.menu')} />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/histoire" label={t('navigation.story')} />
          </li>
          <li onClick={toggleMenu}>
            <MenuItem to="/contact" label={t('navigation.contactUs')} />
          </li>
          {role === 'admin' && (
            <li className={styles.admin}>
              <Link to="/admin">
                <img src="/images/batman.png" width={50} alt="admin-logo" />
              </Link>
            </li>
          )}
        </ul>
      </div>
      {/* Mobile Menu - End */}
      {role === 'admin' && (
        <div className={styles.admin}>
          <Link to="/admin">
            <img src="/images/batman.png" width={50} alt="admin-logo" />
          </Link>
        </div>
      )}
    </nav>
  );
}
