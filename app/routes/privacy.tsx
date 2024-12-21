import { json, LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import i18next from '~/lib/i18next.server';
import { CONSTANTS } from '~/utils/constants';

export const handle = { i18n: 'privacy' };

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, 'privacy');
  const pageTitle = t(['pageTitle']);

  return json({ pageTitle });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

export default function Privacy() {
  return <h1>Privacy</h1>;
}
