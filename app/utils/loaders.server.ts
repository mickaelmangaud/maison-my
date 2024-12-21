import i18next from '~/lib/i18next.server';

interface GetPageTitleArgs {
  request: Request;
  page: 'common' | 'account' | 'admin' | 'conditions' | 'contact' | 'home' | 'menu' | 'privacy' | 'signin' | 'story';
}

export async function getPageTitle({ request, page }: GetPageTitleArgs) {
  const t = await i18next.getFixedT(request, page);
  return t('pageTitle');
}
