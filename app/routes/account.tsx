import { useLoaderData, useNavigate, useOutletContext } from '@remix-run/react';
import { LoaderFunctionArgs, MetaFunction, redirect } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import styles from '~/styles/account.module.scss';
import { OutletContextType } from '~/root';
import { Layout } from '~/layout';
import { CONSTANTS } from '~/utils/constants';
import { getPageTitle } from '~/utils/loaders.server';

export const handle = { i18n: 'account' };

export async function loader({ request }: LoaderFunctionArgs) {
  const pageTitle = await getPageTitle({ request, page: 'account' });

  const { user, headers } = await createSupabaseServerClient(request);
  if (!user) {
    return redirect('/signin');
  }
  return { user, pageTitle, headers };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

export default function Account() {
  const { user } = useLoaderData<typeof loader>();
  const { supabase } = useOutletContext<OutletContextType>();
  const { t } = useTranslation('account');
  const navigate = useNavigate();

  const handleSignOut = () => {
    supabase.auth.signOut({});
    navigate('/');
  };

  const dateCreated = new Date(user.created_at).toLocaleDateString('fr-FR');

  return (
    <Layout>
      <div className={styles.account}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('myAccount')}</h1>

          <div className={styles.user}>
            <div className={styles.infos}>
              <p className={styles.welcome}>
                {t('hello')}, <span className={styles.coloredText}>{user.user_metadata.full_name}</span>
              </p>
              <p className={styles.email}>
                {t('emailAddress')}: <span className={styles.coloredText}>{user.user_metadata.email}</span>
              </p>
              <p className={styles.date}>
                {t('memberSince')} {dateCreated}
              </p>
            </div>
            <img className={styles.avatar} src={user.user_metadata.avatar_url} alt="user-avatar" />
          </div>

          <div className={styles.advantages}>
            <h1>{t('myMyAdvantages')}</h1>
            <div className={styles.soon}>{t('soon')}</div>
          </div>

          <p className={styles.logout} onClick={handleSignOut}>
            {t('logout')}
          </p>
        </div>
      </div>
    </Layout>
  );
}
