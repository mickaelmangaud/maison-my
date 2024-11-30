import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
  useRevalidator,
} from '@remix-run/react';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from 'remix-i18next/react';
import { Footer } from './components/footer';
import { Socials } from './components/socials';
import { createBrowserClient } from '@supabase/ssr';
import { SupabaseClient, User } from '@supabase/supabase-js';
import i18next from '~/lib/i18next.server';
import styles from './styles/globals.module.scss';
import { createSupabaseServerClient } from './lib/supabase.server';
import { useEffect } from 'react';

export const handle = { i18n: 'common' };

export interface OutletContextType {
  supabase: SupabaseClient;
  user: User | null;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const locale = await i18next.getLocale(request);

  const { supabaseClient: supabase } = createSupabaseServerClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const supabaseEnv = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  };

  return json({ locale, supabaseEnv, user });
};

export default function App() {
  const { locale, supabaseEnv, user } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();

  const supabase = createBrowserClient(supabaseEnv.SUPABASE_URL!, supabaseEnv.SUPABASE_ANON_KEY!, {
    isSingleton: true,
  });

  useChangeLanguage(locale);
  const revalidator = useRevalidator();

  useEffect(() => {
    supabase.auth.onAuthStateChange(() => {
      revalidator.revalidate();
    });
  }, [supabase, revalidator]);

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
        {/* TODO: improve this */}
        <Outlet context={{ user, supabase }} />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
