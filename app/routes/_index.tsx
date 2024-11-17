import { useTranslation } from 'react-i18next';

export default function Component() {
  const { t } = useTranslation();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <h1>{t('welcome')}</h1>
    </div>
  );
}
