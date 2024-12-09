import { isRouteErrorResponse, json, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useRevalidator, useRouteError } from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from 'remix-i18next/react';
import { createBrowserClient } from '@supabase/ssr';
import { SupabaseClient, User } from '@supabase/supabase-js';
import { createSupabaseServerClient } from './lib/supabase.server';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import styles from '~/styles/globals.module.scss';
import i18next from '~/lib/i18next.server';
import { useEffect } from 'react';

export const handle = { i18n: 'common' };

export interface OutletContextType {
  supabase: SupabaseClient;
  user: User | null;
  role: string | null;
}

interface JwtType extends JwtPayload {
  user_role: string;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabaseEnv = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  };

  const locale = await i18next.getLocale(request);
  const { supabaseClient: supabase } = createSupabaseServerClient(request);

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  let jwt: JwtType;

  if (!sessionError && !userError) {
    jwt = jwtDecode(session?.access_token || '');
    return json({ locale, supabaseEnv, user, role: jwt.user_role });
  } else {
    console.log('no session', sessionError, userError);
  }

  return json({ locale, supabaseEnv, user, role: null });
};

export default function App() {
  const { locale, supabaseEnv, user, role } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();
  const revalidator = useRevalidator();
  console.log('APP FRONT', user, role);
  const supabase = createBrowserClient(supabaseEnv.SUPABASE_URL!, supabaseEnv.SUPABASE_ANON_KEY!, {
    isSingleton: true,
  });

  useChangeLanguage(locale);

  useEffect(() => {
    supabase.auth.onAuthStateChange(() => {
      revalidator.revalidate();
    });
  }, []);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={styles.body}>
        <Outlet context={{ user, role, supabase }} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
