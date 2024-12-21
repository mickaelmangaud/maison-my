import { LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction } from '@remix-run/react';
import { CONSTANTS } from '~/utils/constants';
import { getPageTitle } from '~/utils/loaders';

export const handle = { i18n: 'conditions' };

export async function loader({ request }: LoaderFunctionArgs) {
  const pageTitle = await getPageTitle({ request, page: 'conditions' });

  return { pageTitle };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${CONSTANTS.SITE_NAME} | ${data?.pageTitle}` }];
};

export default function Conditions() {
  return <h1>Conditions</h1>;
}
