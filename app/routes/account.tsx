import { json, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { useLoaderData, useNavigate, useOutletContext } from '@remix-run/react';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import styles from '~/styles/account.module.scss';
import { Layout } from '~/layout';
import { OutletContextType } from '~/root';

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabaseClient, headers } = createSupabaseServerClient(request);
  const { data } = await supabaseClient.auth.getUser();

  if (!data.user) {
    return redirect('/signin');
  }

  return json(data.user, { headers });
}

export default function Account() {
  const user = useLoaderData<typeof loader>();
  const { supabase } = useOutletContext<OutletContextType>();
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
          <h1 className={styles.title}>Mon compte My</h1>

          <div className={styles.user}>
            <div className={styles.infos}>
              <p className={styles.welcome}>
                Bonjour, <span className={styles.coloredText}>{user.user_metadata.full_name}</span>
              </p>
              <p className={styles.email}>
                Adresse email: <span className={styles.coloredText}>{user.user_metadata.email}</span>
              </p>
              <p className={styles.date}>Membre depuis le {dateCreated}</p>
            </div>
            <img className={styles.avatar} src={user.user_metadata.avatar_url} alt="user-avatar" />
          </div>

          <div className={styles.advantages}>
            <h1>Mes avantages My</h1>
            <div style={{ display: 'grid', placeItems: 'center', minHeight: '300px' }}>Ici bientôt, mes avantages My</div>
          </div>

          <p className={styles.logout} onClick={handleSignOut}>
            Déconnexion
          </p>
        </div>
      </div>
    </Layout>
  );
}
