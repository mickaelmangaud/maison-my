import { FaAngleDown } from 'react-icons/fa6';
import { json, useFetcher } from '@remix-run/react';
import { ActionFunctionArgs } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { Layout } from '~/layout';
import { resend } from '~/lib/resend';
import styles from '~/styles/index.module.scss';

export const handle = { i18n: 'home' };

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email') as string;

  const { data, error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    audienceId: '5a3269f8-aa7c-4335-bcdd-871b68df96a5',
  });

  if (error) {
    return json({ error, code: 500 });
  }

  return json({ data, code: 200 });
}

export default function Home() {
  const { t } = useTranslation('home');
  const fectcher = useFetcher<typeof action>();
  const isSendingMessage = fectcher.state !== 'idle';
  const hasSuscribed = fectcher.data?.code === 200;

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Layout>
      <div className={styles.index}>
        {/* HERO - Start */}
        <div className={styles.hero}>
          {/* VIDEO */}
          <video loop muted autoPlay playsInline className={styles.video} preload="preload">
            <source src="video.mp4" type="video/mp4" />
          </video>

          {/* HEADER */}
          <div className={styles.header}>
            <h1 className={styles.welcome}>{t('welcome')}</h1>
            {/* TODO;: use translations */}
            {isSendingMessage && <p>Souscription en cours</p>}

            {hasSuscribed && <p>Souscription effectuée !</p>}

            {!isSendingMessage && !hasSuscribed && (
              <fectcher.Form method="post" className={styles.subscribe}>
                <input type="text" name="email" className={styles.input} placeholder={t('emailPlaceholder')} />
                <button className={styles.btn}>{t('giveMeMore')}</button>
              </fectcher.Form>
            )}

            <FaAngleDown className={styles.angleDown} onClick={scrollDown} />
          </div>
        </div>
        {/* HERO - End */}

        {/* MESSAGE - Start */}
        <div className={styles.message}>
          <h1>{t('message.h1')}</h1>
          <p>{t('message.p')}</p>
        </div>
        {/* MESSAGE - End */}

        {/* GALLERY - Start */}
        <div className={styles.mansonry}>
          {[...Array(7)].map((_, i) => (
            <div className={styles.item} key={i}>
              <img src={`/images/food/${i + 1}.webp`} alt={'food ' + (i + 1)} />
            </div>
          ))}
        </div>
        {/* GALLERY - End */}

        {/* MESSAGE - Start */}
        <div className={styles.message}>
          <h1>{t('message.h1')}</h1>
          <p>{t('message.p')}</p>
        </div>
        {/* MESSAGE - End */}
      </div>
    </Layout>
  );
}
