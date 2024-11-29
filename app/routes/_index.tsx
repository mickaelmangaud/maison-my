import { useTranslation } from 'react-i18next';
import { Navigation } from '~/components/navigation';
import { FaAngleDown } from 'react-icons/fa6';
import { useFetcher } from '@remix-run/react';
import styles from '../styles/index.module.scss';
import { IndexAction, indexLoder } from '~/actions';

export const loader = indexLoder;
export const action = IndexAction;

export default function Home() {
  const { t } = useTranslation();
  const fectcher = useFetcher<typeof action>();
  const isSendingMessage = fectcher.state !== 'idle';
  const hasSuscribed = fectcher.data?.code === 200;

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
          {isSendingMessage && <p>Souscription en cours</p>}
          {hasSuscribed && <p>Souscription effectuée !</p>}
          {!isSendingMessage && !hasSuscribed && (
            <fectcher.Form method="post" className={styles.subscribe}>
              <input type="text" name="email" className={styles.input} placeholder="addresse email..." />
              <button className={styles.btn}>PAR ICI LES REDUCS !</button>
            </fectcher.Form>
          )}
          <FaAngleDown className={styles.angleDown} onClick={scrollDown} />
        </div>
      </div>
      <div className={styles.message}>
        <h1>Banh mi, Bobuns, Riz, nouilles... Venez déguster nos petits plats savoureux !</h1>
        <p>
          Chaque bouchée de notre Banh mi, avec son pain croustillant, son porc mariné, ses légumes croquants, et sa touche de
          coriandre, vous transporte instantanément....
        </p>
      </div>
      <div className={styles.mansonry}>
        {[...Array(7)].map((_, i) => (
          <div className={styles.item} key={i}>
            <img src={`/images/food/${i + 1}.webp`} />
          </div>
        ))}
      </div>
    </div>
  );
}
