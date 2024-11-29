import { Layout } from '~/layout';
import styles from '../styles/maisonmy.module.scss';

export default function MaisonMy() {
  return (
    <Layout>
      <div className={styles.maisonmy}>
        <div className={styles.content}>
          <h1>La Maison My</h1>
        </div>
      </div>
    </Layout>
  );
}
