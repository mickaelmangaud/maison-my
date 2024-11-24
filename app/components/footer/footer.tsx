import styles from './footer.module.scss';
import { FaInstagram, FaFacebook } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.address}>
        <h1>Maison My</h1>
        <p>68 Rue du Chemin Vert,</p>
        <p> 75011 Paris</p>
        <p>06 52 58 27 45</p>
        <div className={styles.insta}>
          <FaInstagram size={22} />
          <a href="https://www.instagram.com/maisonmy_banhmi/" target="_blank">
            Instagram
          </a>
        </div>
        <div className={styles.insta}>
          <FaFacebook size={22} />
          <a href="https://www.facebook.com/maisonmybanhmi/" target="_blank">
            Facebook
          </a>
        </div>
      </div>
      <div className={styles.pages}>
        <ul>
          <h1>Navigation</h1>
          <li>La Maison My</li>
          <li>Le menu</li>
          <li>Un peu d'histoire</li>
          <li>Nous contacter</li>
        </ul>
      </div>
    </footer>
  );
}
