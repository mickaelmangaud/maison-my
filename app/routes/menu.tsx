import { useTranslation } from 'react-i18next';
import { Layout } from '~/layout';
import styles from '../styles/menu.module.scss';

export default function Carte() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className={styles.menu}>
        <div className={styles.content}>
          <h1>{t('menu.title')}</h1>
        </div>
      </div>
    </Layout>
  );
}
