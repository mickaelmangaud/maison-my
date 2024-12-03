import { json, Link, useFetcher } from '@remix-run/react';
import { ActionFunctionArgs, TypedResponse } from '@remix-run/node';
import { CreateEmailResponseSuccess, ErrorResponse, Resend } from 'resend';
import ContactEmail from '~/emails/contact-email';
import styles from '../styles/contact.module.scss';
import { Layout } from '~/layout';

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

  if (isSendingMessage) {
    return (
      <Layout>
        <div className={styles.contact}>
          <div className={styles.content}>
            <p>Envoi du message en cours...</p>
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
            <p>Message envoyé !</p>
            <p>Nous reviendrons vers vous rapidement !</p>
            <Link to="/">
              <button className={styles.back}>Retour à l'accueil</button>
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
          <h1>Nous contacter</h1>
          <p>
            Que vous soyez, professionnel, particulier, la Maison My pour faire ceci ou celà en mettant votre message dans la
            boitet en cliquand.
          </p>
          <p>Niah niah niah un peu de texte pour faire genre etc ....</p>
          {!isEmailSent && !isSendingMessage && (
            <fetcher.Form method="post" className={styles.form}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Votre email ..." />
              <label htmlFor="tel">Numéro de téléphone</label>
              <input type="tel" name="tel" id="tel" placeholder="Votre numùéro de téléphone ..." />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder="Votre message"></textarea>
              <button type="submit">Envoyer</button>
            </fetcher.Form>
          )}
        </div>
      </div>
    </Layout>
  );
}
