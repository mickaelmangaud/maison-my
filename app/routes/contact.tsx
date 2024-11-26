import { Form, json, useActionData, useFetcher } from '@remix-run/react';
import styles from '../styles/contact.module.scss';
import { ActionFunctionArgs, TypedResponse } from '@remix-run/node';
import { CreateEmailResponseSuccess, ErrorResponse, Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactActionData {
  error?: ErrorResponse;
  data?: CreateEmailResponseSuccess | null;
  code: number;
}

export async function action({ request }: ActionFunctionArgs): Promise<TypedResponse<ContactActionData>> {
  const formData = await request.formData();
  const email = formData.get('email');
  const message = formData.get('message');

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mickael.mangaud@gmail.com',
    subject: `Nouveau message d'un utilisateur`,
    html: `${message}`,
  });

  if (error) {
    return json({ error, code: 500 });
  }

  return json({ data, code: 200 });
}

export default function Contact() {
  const fetcher = useFetcher<typeof action>();
  const isSendingMessage = fetcher.state !== 'idle';
  const data = fetcher.data;

  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <p>
          Que vous soyez, professionnel, particulier, la Maison My pour faire ceci ou celà en mettant votre message dans
          la boitet en cliquand.
        </p>
        <p>Niah niah niah un peu de texte pour faire genre etc ....</p>
        {isSendingMessage ? (
          <p>Loading ...</p>
        ) : (
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
