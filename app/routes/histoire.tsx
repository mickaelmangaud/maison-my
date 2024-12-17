import { Trans, useTranslation } from 'react-i18next';
import { Layout } from '~/layout';
import styles from '../styles/histoire.module.scss';

export const handle = { i18n: 'story' };

export default function Histoire() {
  const { t } = useTranslation('story');

  return (
    <Layout>
      <div className={styles.histoire}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('banhmiTitle')}</h1>
          <div className={styles.story}>
            <Trans t={t} i18nKey="banhmiDesc" components={{ p: <p /> }} />
          </div>
          <h1 className={styles.title}>{t('bobunTitle')}</h1>
          <div className={styles.story}>
            <Trans t={t} i18nKey="banhmiDesc" components={{ p: <p /> }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
