import { useTranslation } from 'react-i18next';

export default function Component() {
  const { t } = useTranslation();
  return <h1>{t('greeting')} to Remix !</h1>;
}
