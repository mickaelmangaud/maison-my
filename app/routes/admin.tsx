import { useOutletContext } from '@remix-run/react';
import { OutletContextType } from '~/root';
import styles from '../styles/admin.module.scss';
import { Layout } from '~/layout';

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
