import { Form } from '@remix-run/react';
import styles from '../styles/contact.module.scss';
import { ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');
  const message = formData.get('message');
  console.log(email, message);
  return null;
}

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <p>
          Que vous soyez, professionnel, particulier, la Maison My pour faire ceci ou celà en mettant votre message dans
          la boitet en cliquand.
        </p>
        <p>Niah niah niah un peu de texte pour faire genre etc ....</p>
        <Form method="post" className={styles.form}>
          <input type="email" name="email" id="email" />
          <textarea name="message" id="message"></textarea>
          <button type="submit">Envoyer</button>
        </Form>
      </div>
    </div>
  );
}
