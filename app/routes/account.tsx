import { json, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { useLoaderData, useNavigate, useOutletContext } from '@remix-run/react';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import styles from '../styles/account.module.scss';
import { Layout } from '~/layout';
import { OutletContextType } from '~/root';

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabaseClient, headers } = createSupabaseServerClient(request);
  const { data, error } = await supabaseClient.auth.getUser();

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

  return (
    <Layout>
      <div className={styles.account}>
        <div className={styles.content}>
          <h1 className={styles.avantages}>Avantages My</h1>
          <p>
            Bonjour, <span className={styles.username}>{user.user_metadata.full_name}</span>
          </p>
          <p className={styles.logout} onClick={handleSignOut}>
            Déconnexion
          </p>
        </div>
      </div>
    </Layout>
  );
}
