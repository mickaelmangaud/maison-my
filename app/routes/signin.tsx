import { useOutletContext } from '@remix-run/react';
import { OutletContextType } from '~/root';

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
    <div>
      <button type="submit" onClick={handleGoogleSignin}>
        Continue with google
      </button>
      <button type="submit" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}
