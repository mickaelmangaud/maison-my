import { useTranslation } from 'react-i18next';
import { Navigation } from '~/components/navigation';
import { FaAngleDown } from 'react-icons/fa6';
import styles from '../styles/index.module.scss';

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
        <Navigation />
        <div className={styles.header}>
          <h1 className={styles.welcome}>Maison My, la référence du Banh mi à Paris</h1>
          <div className={styles.subscribe}>
            <input type="text" className={styles.input} placeholder="addresse email..." />
            <div className={styles.faim}>
              <button className={styles.btn}>Je reste informé</button>
            </div>
          </div>
          <FaAngleDown className={styles.angleDown} onClick={scrollDown} />
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
        {[...Array(7)].map((x, i) => (
          <div className={styles.item} key={i}>
            <img src={`/images/food/${i + 1}.webp`} />
          </div>
        ))}
      </div>
    </div>
  );
}
