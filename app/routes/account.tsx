import { json, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import styles from '../styles/account.module.scss';
import { Layout } from '~/layout';

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

  return (
    <Layout>
      <div className={styles.account}>
        <div className={styles.content}>
          <h1>
            Bonjour <span className={styles.username}>{user.user_metadata.full_name}</span>
          </h1>
          <p>Bientôt ici, les avantages My</p>
        </div>
      </div>
    </Layout>
  );
}
