import { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { json, Links, Meta, Outlet, Scripts, useLoaderData, useMatches } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from 'remix-i18next/react';
import i18next from '~/lib/i18next.server';
import { Navigation } from './components/navigation';
import styles from './globals.module.scss';
import { Footer } from './components/footer';

export const handle = { i18n: 'common' };

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const locale = await i18next.getLocale(request);
  return json({ locale });
};

export default function App() {
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();
  useChangeLanguage(locale);

  const matches = useMatches();
  const isNotHomePage = matches[1].id !== 'routes/_index';

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
        <Meta />
        <Links />
      </head>
      <body className={styles.body}>
        {/* TODO: improve this */}
        {isNotHomePage && <Navigation />}
        <div className={styles.outletWrapper}>
          <Outlet />
        </div>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
