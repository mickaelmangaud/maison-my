import { ActionFunctionArgs, json, TypedResponse } from '@remix-run/node';
import { CreateEmailResponseSuccess, ErrorResponse, Resend } from 'resend';
import { Link, useFetcher, useOutletContext } from '@remix-run/react';
import { Layout } from '~/layout';
import { OutletContextType } from '~/root';
import ContactEmail from '~/emails/contact-email';
import styles from '../styles/contact.module.scss';
import { Trans, useTranslation } from 'react-i18next';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactActionData {
  error?: ErrorResponse;
  data?: CreateEmailResponseSuccess | null;
  code: number;
}

export async function action({ request }: ActionFunctionArgs): Promise<TypedResponse<ContactActionData>> {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const tel = formData.get('tel') as string;

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mickael.mangaud@gmail.com',
    subject: `Nouveau message d'un utilisateur`,
    html: `${message}`,
    react: <ContactEmail email={email} message={message} tel={tel} />,
  });

  if (error) {
    return json({ error, code: 500 });
  }

  return json({ data, code: 200 });
}

export default function Contact() {
  const fetcher = useFetcher<typeof action>();
  const isSendingMessage = fetcher.state !== 'idle';
  const isEmailSent = fetcher.data?.code === 200;
  const { user } = useOutletContext<OutletContextType>();
  const { t } = useTranslation();

  if (isSendingMessage) {
    return (
      <Layout>
        <div className={styles.contact}>
          <div className={styles.content}>
            <p>{t('contact.sendingMessage')}</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (isEmailSent) {
    return (
      <Layout>
        <div className={styles.contact}>
          <div className={styles.content}>
            <p>{t('contact.messageSent')}</p>
            <p>{t('contact.beBack')}</p>
            <Link to="/">
              <button className={styles.back}>{t('contact.back')}</button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.content}>
          <h1>{t('contact.contactUs')}</h1>
          <Trans i18nKey="contact.desc" components={{ p: <p /> }} />
          {!isEmailSent && !isSendingMessage && (
            <fetcher.Form method="post" className={styles.form}>
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t('contact.emailPlaceholder')}
                defaultValue={user?.user_metadata.email || ''}
              />
              <label htmlFor="tel">{t('contact.phoneNumber')}</label>
              <input type="tel" name="tel" id="tel" placeholder={t('contact.numberPlaceholder')} />
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea name="message" id="message" placeholder={t('contact.messagePlaceholder')}></textarea>
              <button type="submit">{t('contact.submit')}</button>
            </fetcher.Form>
          )}
        </div>
      </div>
    </Layout>
  );
}
