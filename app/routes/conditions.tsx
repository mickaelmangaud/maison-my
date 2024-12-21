import { json, LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import i18next from '~/lib/i18next.server';
import { CONSTANTS } from '~/utils/constants';

export const handle = { i18n: 'conditions' };

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, 'conditions');
  const pageTitle = t(['pageTitle']);

  return json({ pageTitle });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

export default function Conditions() {
  return <h1>Conditions</h1>;
}
