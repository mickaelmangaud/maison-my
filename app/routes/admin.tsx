import { useOutletContext } from '@remix-run/react';
import { OutletContextType } from '~/root';
import { Layout } from '~/layout';
import styles from '../styles/admin.module.scss';

export const handle = { i18n: 'admin' };

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
