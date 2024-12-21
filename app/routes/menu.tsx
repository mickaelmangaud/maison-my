import { useTranslation } from 'react-i18next';
import { LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import { Layout } from '~/layout';
import { CONSTANTS } from '~/utils/constants';
import { getPageTitle } from '~/utils/loaders';
import styles from '../styles/menu.module.scss';

export const handle = { i18n: 'menu' };

export async function loader({ request }: LoaderFunctionArgs) {
  const pageTitle = await getPageTitle({ request, page: 'menu' });

  return { pageTitle };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

export default function Carte() {
  const { t } = useTranslation('menu');

  return (
    <Layout>
      <div className={styles.menu}>
        <div className={styles.content}>
          <h1>{t('title')}</h1>
        </div>
      </div>
    </Layout>
  );
}
