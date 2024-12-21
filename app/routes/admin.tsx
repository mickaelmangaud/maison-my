import { useOutletContext } from '@remix-run/react';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { OutletContextType } from '~/root';
import { Layout } from '~/layout';
import { CONSTANTS } from '~/utils/constants';
import { getPageTitle } from '~/utils/loaders';
import styles from '../styles/admin.module.scss';

export const handle = { i18n: 'admin' };

export async function loader({ request }: LoaderFunctionArgs) {
  const pageTitle = await getPageTitle({ request, page: 'admin' });

  return { pageTitle };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

export default function Admin() {
  const { role } = useOutletContext<OutletContextType>();

  if (role !== 'admin') {
    return (
      <Layout>
        <div className={styles.admin}>
          <div className={styles.content}>
            <h1>Unauthorized</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.admin}>
        <div className={styles.content}>
          <h1>Admin</h1>
        </div>
      </div>
    </Layout>
  );
}
