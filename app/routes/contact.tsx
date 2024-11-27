import { json, Link, useFetcher } from '@remix-run/react';
import { ActionFunctionArgs, TypedResponse } from '@remix-run/node';
import { CreateEmailResponseSuccess, ErrorResponse, Resend } from 'resend';
import ContactEmail from '~/emails/contact-email';
import styles from '../styles/contact.module.scss';

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

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mickael.mangaud@gmail.com',
    subject: `Nouveau message d'un utilisateur`,
    html: `${message}`,
    react: <ContactEmail email={email} message={message} />,
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

  if (isSendingMessage) {
    return (
      <div className={styles.contact}>
        <div className={styles.content}>
          <p>Envoi en cours...</p>
        </div>
      </div>
    );
  }

  if (isEmailSent) {
    return (
      <div className={styles.contact}>
        <div className={styles.content}>
          <p>Message envoyé !</p>
          <p>Je reviendrai vers vous rapidement !</p>
          <Link to="/">
            <button>Retourner sur la page d'accueil</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <p>
          Que vous soyez, professionnel, particulier, la Maison My pour faire ceci ou celà en mettant votre message dans
          la boitet en cliquand.
        </p>
        <p>Niah niah niah un peu de texte pour faire genre etc ....</p>
        {!isEmailSent && !isSendingMessage && (
          <fetcher.Form method="post" className={styles.form}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Votre email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Votre message"></textarea>
            <button type="submit">Envoyer</button>
          </fetcher.Form>
        )}
      </div>
    </div>
  );
}
