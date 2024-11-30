import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { GoogleButton } from '~/components/google-button/';
import { Layout } from '~/layout';
import { OutletContextType } from '~/root';
import styles from '~/styles/signin.module.scss';

export function loader({ request }: LoaderFunctionArgs) {
  return { callbackURL: process.env.CALLBACK_URL };
}

export default function SignIn() {
  const { supabase } = useOutletContext<OutletContextType>();
  const { callbackURL } = useLoaderData<typeof loader>();

  const handleGoogleSignin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: callbackURL,
      },
    });
  };

  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  return (
    <Layout>
      <div className={styles.signin}>
        <div className={styles.content}>
          <GoogleButton onCLick={handleGoogleSignin} />
          <button type="submit" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    </Layout>
  );
}
