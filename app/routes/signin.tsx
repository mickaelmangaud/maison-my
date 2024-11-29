import { useOutletContext } from '@remix-run/react';
import { GoogleButton } from '~/components/google-button';
import { Layout } from '~/layout';
import { OutletContextType } from '~/root';
import styles from '~/styles/signin.module.scss';

export default function SignIn() {
  const { supabase } = useOutletContext<OutletContextType>();

  const handleGoogleSignin = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/auth/callback',
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
