import { Trans, useTranslation } from 'react-i18next';
import { Layout } from '~/layout';
import styles from '../styles/histoire.module.scss';

export default function Histoire() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className={styles.histoire}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('story.banhmiTitle')}</h1>
          <div className={styles.story}>
            <Trans i18nKey="story.banhmiDesc" components={{ p: <p /> }} />
          </div>
          <h1 className={styles.title}>{t('story.bobunTitle')}</h1>
          <div className={styles.story}>
            <Trans i18nKey="story.banhmiDesc" components={{ p: <p /> }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
