import { Layout } from '~/layout';
import styles from '../styles/carte.module.scss';

export default function Carte() {
  return (
    <Layout>
      <div className={styles.carte}>
        <div className={styles.content}>
          <h1>La carte</h1>
        </div>
      </div>
    </Layout>
  );
}
