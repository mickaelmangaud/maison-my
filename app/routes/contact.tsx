import { Form } from '@remix-run/react';
import styles from '../styles/contact.module.scss';
import { ActionFunctionArgs } from '@remix-run/node';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <p>
          Que vous soyez, professionnel, particulier, la Maison My pour faire ceci ou celà en mettant votre message dans
          la boitet en cliquand.
        </p>
        <p>Niah niah niah un peu de texte pour faire genre etc ....</p>
        <Form action="send-email" method="post" className={styles.form}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Votre email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Votre message"></textarea>
          <button type="submit">Envoyer</button>
        </Form>
      </div>
    </div>
  );
}
