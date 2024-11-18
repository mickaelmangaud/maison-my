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
      <div className={styles.message}>
        <h1>Banh mi, Bobuns, Riz, nouilles... Venez déguster nos petits plats savoureux !</h1>
        <p>
          Chaque bouchée de notre Banh mi, avec son pain croustillant, son porc mariné, ses légumes croquants, et sa
          touche de coriandre, vous transporte instantanément....
        </p>
      </div>
      <div className={styles.mansonry}>
        <div className={styles.image}>
          <img src="/images/food/3.png" />
        </div>
        <div className={styles.image}>
          <img src="/images/food/2.png" />
        </div>
        <div className={styles.image}>
          <img src="/images/food/1.png" />
        </div>
        <div className={styles.image}>
          <img src="/images/food/4.png" />
        </div>
        <div className={styles.image}>
          <img src="/images/food/5.png" />
        </div>
        <div className={styles.image}>
          <img src="/images/food/6.png" />
        </div>
        <div className={styles.image}>
          <img src="/images/food/7.png" />
        </div>
        <div className={styles.image}>
          <img src="/images/food/8.png" />
        </div>
      </div>
    </div>
  );
}
