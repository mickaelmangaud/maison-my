import { json, LoaderFunctionArgs, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import styles from '../styles/account.module.scss';

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabaseClient, headers } = createSupabaseServerClient(request);

  const { data, error } = await supabaseClient.auth.getUser();

  if (!data.user) {
    return redirect('/');
  }

  return json(data.user, { headers });
}

export default function Account() {
  const user = useLoaderData<typeof loader>();

  return (
    <div className={styles.account}>
      <div className={styles.content}>
        <h1>Bonjour {user.user_metadata.full_name}</h1>
        <p>Bientôt ici, les avantages My</p>
      </div>
    </div>
  );
}
