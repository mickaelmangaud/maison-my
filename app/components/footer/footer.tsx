import { Link } from '@remix-run/react';
import { SocialIcon } from 'react-social-icons';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Address */}
        <div className={styles.address}>
          <h1>Maison My</h1>
          <p>68 Rue du Chemin Vert,</p>
          <p> 75011 Paris</p>
          <p>06 52 58 27 45</p>
          <div className={styles.network}>
            <div className={styles.icon}>
              <SocialIcon network="instagram" />
            </div>
            <a href="https://www.instagram.com/maisonmy_banhmi/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <div className={styles.network}>
            <div className={styles.icon}>
              <SocialIcon network="facebook" />
            </div>
            <a href="https://www.facebook.com/maisonmybanhmi/" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <ul>
            <h1>{t('footer.navigation.title')}</h1>
            <li>
              <Link to="/">{t('footer.navigation.home')}</Link>
            </li>
            <li>
              <Link to="/account">{t('footer.navigation.myAccount')}</Link>
            </li>
            <li>
              <Link to="/menu">{t('footer.navigation.menu')}</Link>
            </li>
            <li>
              <Link to="/histoire">{t('footer.navigation.story')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('footer.navigation.contactUs')}</Link>
            </li>
          </ul>
        </div>

        {/* Opening hours */}
        <div className={styles.hours}>
          <ul>
            <h1>{t('footer.openingHours.title')}</h1>
            <li>
              {t('footer.openingHours.monday')} <span>.....................................</span> 12h - 16h
            </li>
            <li>
              {t('footer.openingHours.thuesday')} <span>.....................................</span> 12h - 16h
            </li>
            <li>
              {t('footer.openingHours.wednesday')} <span>................................</span> 12h - 16h
            </li>
            <li>
              {t('footer.openingHours.thursday')} <span>......................................</span> 12h - 16h
            </li>
            <li>
              {t('footer.openingHours.friday')} <span>................................</span> 12h - 16h
            </li>
          </ul>
        </div>

        {/* Google map */}
        <div className={styles.access}>
          <ul>
            <h1>{t('footer.access.findUs')}</h1>
            <li className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9115088184567!2d2.375068076596885!3d48.85989780060023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d0e73574f43%3A0x60e935830f5176a3!2sMaison%20My%20-%20Banh%20mi!5e0!3m2!1sfr!2sfr!4v1732988033154!5m2!1sfr!2sfr"
                width="268"
                height="200"
                style={{ border: 0, marginTop: '12px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
            <li className={styles.transport}>
              <img src="/images/transports/bus.svg" alt="bus" height={24} />
              <img src="/images/transports/bus_69.svg" alt="bus-69" height={24} />
              <span>Chemin vert - Parmentier</span>
            </li>
            <li className={styles.transport}>
              <img src="/images/transports/subway.svg" alt="subway" height={24} />
              <img src="/images/transports/subway_9.svg" alt="subway-9" height={24} />
              <span>Voltaire</span>
            </li>
          </ul>
        </div>
        {/* Google map - end */}
      </div>

      {/* Copyright */}
      <p className={styles.copyright}>{t('footer.copyright')}</p>
    </footer>
  );
}
