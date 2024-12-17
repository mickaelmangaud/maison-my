import { useLoaderData, useOutletContext } from '@remix-run/react';
import { LoginButton } from '~/components/login-button';
import { Layout } from '~/layout';
import { OutletContextType } from '~/root';
import styles from '~/styles/signin.module.scss';

export const handle = { i18n: 'signin' };

export function loader() {
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

  const handleFacebookSignin = async () => {
    supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: callbackURL,
      },
    });
  };

  return (
    <Layout>
      <div className={styles.signin}>
        <div className={styles.content}>
          <LoginButton provider="Google" onClick={handleGoogleSignin} />
          <LoginButton provider="Facebook" onClick={handleFacebookSignin} />
          <LoginButton provider="LinkedIn" onClick={handleFacebookSignin} />
          <LoginButton provider="Mail" onClick={handleFacebookSignin} />
        </div>
      </div>
    </Layout>
  );
}
