import { useTranslation } from 'react-i18next';
import { Navigation } from '~/components/navigation';
import { FaAngleDown } from 'react-icons/fa6';
import styles from '../styles/index.module.css';

export default function Component() {
  const { t } = useTranslation();

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.index}>
      <div className={styles.hero}>
        <video loop muted autoPlay playsInline className={styles.video}>
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className={styles.header}>
          <Navigation />
          <h1 className={styles.welcome}>Maison My, la référence du Banh mi à Paris</h1>
        </div>
        <div className={styles.faim} onClick={scrollDown}>
          <button className={styles.btn}>J'ai faim !</button>
          <FaAngleDown className={styles.angleDown} />
        </div>
      </div>
    </div>
  );
}
