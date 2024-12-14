import { useLoaderData, useNavigate, useOutletContext } from '@remix-run/react';
import { json, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import styles from '~/styles/account.module.scss';
import { OutletContextType } from '~/root';
import { Layout } from '~/layout';

export async function loader({ request }: LoaderFunctionArgs) {
  const { user, headers } = await createSupabaseServerClient(request);
  console.log({ user });

  if (!user) {
    return redirect('/signin');
  }

  return json(user, { headers });
}

export default function Account() {
  const user = useLoaderData<typeof loader>();
  const { supabase } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignOut = () => {
    supabase.auth.signOut({});
    navigate('/');
  };

  // const dateCreated = new Date(user.created_at).toLocaleDateString('fr-FR');

  return (
    <Layout>
      <div className={styles.account}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('account.myAccount')}</h1>

          <div className={styles.user}>
            <div className={styles.infos}>
              <p className={styles.welcome}>
                {t('account.hello')}, <span className={styles.coloredText}>{user.user_metadata.full_name}</span>
              </p>
              <p className={styles.email}>
                {t('account.emailAddress')}: <span className={styles.coloredText}>{user.user_metadata.email}</span>
              </p>
              <p className={styles.date}>
                {t('account.memberSince')} {'blop'}
              </p>
            </div>
            <img className={styles.avatar} src={user.user_metadata.avatar_url} alt="user-avatar" />
          </div>

          <div className={styles.advantages}>
            <h1>{t('account.myMyAdvantages')}</h1>
            <div style={{ display: 'grid', placeItems: 'center', minHeight: '300px' }}>{t('account.soon')}</div>
          </div>

          <p className={styles.logout} onClick={handleSignOut}>
            {t('account.logout')}
          </p>
        </div>
      </div>
    </Layout>
  );
}
