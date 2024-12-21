import { Trans, useTranslation } from 'react-i18next';
import { json, LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import { Layout } from '~/layout';
import i18next from '~/lib/i18next.server';
import { CONSTANTS } from '~/utils/constants';
import styles from '../styles/histoire.module.scss';

export const handle = { i18n: 'story' };

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, 'story');
  const pageTitle = t(['pageTitle']);

  return json({ pageTitle });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

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
