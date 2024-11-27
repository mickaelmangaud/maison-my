import { Link } from '@remix-run/react';
import styles from './footer.module.scss';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.address}>
        <h1>Maison My</h1>
        <p>68 Rue du Chemin Vert,</p>
        <p> 75011 Paris</p>
        <p>06 52 58 27 45</p>
        <div className={styles.network}>
          <div className={styles.icon}>
            <SocialIcon network="instagram" />
          </div>
          <a href="https://www.instagram.com/maisonmy_banhmi/" target="_blank">
            Instagram
          </a>
        </div>
        <div className={styles.network}>
          <div className={styles.icon}>
            <SocialIcon network="facebook" />
          </div>
          <a href="https://www.facebook.com/maisonmybanhmi/" target="_blank">
            Facebook
          </a>
        </div>
      </div>
      <div className={styles.navigation}>
        <ul>
          <h1>Navigation</h1>
          <li>
            <Link to="/maisonmy">La Maison My</Link>
          </li>
          <li>
            <Link to="/menu">Le menu</Link>
          </li>
          <li>
            <Link to="/histoire">Un peu d'histoire</Link>
          </li>
          <li>
            <Link to="/contact">Nous contacter</Link>
          </li>
        </ul>
      </div>
      <div className={styles.hours}>
        <ul>
          <h1>Heures d'ouverture</h1>
          <li>Lundi</li>
          <li>Mardi</li>
          <li>Mercredi</li>
          <li>Jeudi</li>
          <li>Vendredi</li>
        </ul>
      </div>
      <div className={styles.access}>
        <ul>
          <h1>Access</h1>
          <li>Metro: niah niah niah</li>
          <li>Bus: niah niah niah</li>
        </ul>
      </div>
    </footer>
  );
}
