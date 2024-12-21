import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { LoginButton } from '~/components/login-button';
import { Layout } from '~/layout';
import { OutletContextType } from '~/root';
import styles from '~/styles/signin.module.scss';
import { CONSTANTS } from '~/utils/constants';
import { getPageTitle } from '~/utils/loaders';

export const handle = { i18n: 'signin' };

export async function loader({ request }: LoaderFunctionArgs) {
  const pageTitle = getPageTitle({ request, page: 'signin' });

  return { callbackURL: process.env.CALLBACK_URL, pageTitle };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

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
