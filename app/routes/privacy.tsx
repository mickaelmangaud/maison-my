import { LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import { CONSTANTS } from '~/utils/constants';
import { getPageTitle } from '~/utils/loaders';

export const handle = { i18n: 'privacy' };

export async function loader({ request }: LoaderFunctionArgs) {
  const pageTitle = await getPageTitle({ request, page: 'privacy' });

  return { pageTitle };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

export default function Privacy() {
  return <h1>Privacy</h1>;
}
