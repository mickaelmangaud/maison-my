import { useTranslation } from 'react-i18next';
import { Navigation } from '~/components/navigation';
import { FaAngleDown } from 'react-icons/fa6';
import { json, useFetcher } from '@remix-run/react';
import { ActionFunctionArgs, TypedResponse } from '@remix-run/node';
import { CreateContactResponseSuccess, ErrorResponse, Resend } from 'resend';
import styles from '../styles/index.module.scss';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactActionData {
  error?: ErrorResponse;
  data?: CreateContactResponseSuccess | null;
  code: number;
}

export async function action({ request }: ActionFunctionArgs): Promise<TypedResponse<ContactActionData>> {
  const formData = await request.formData();
  const email = formData.get('email') as string;

  const { data, error } = await resend.contacts.create({
    email,
    // firstName: 'Steve',
    // lastName: 'Wozniak',
    unsubscribed: false,
    audienceId: '5a3269f8-aa7c-4335-bcdd-871b68df96a5',
  });

  if (error) {
    return json({ error, code: 500 });
  }

  return json({ data, code: 200 });
}

export default function Component() {
  const { t } = useTranslation();
  const fectcher = useFetcher();

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.index}>
      <div className={styles.hero}>
        <video loop muted autoPlay playsInline className={styles.video}>
          <source src="video.mp4" type="video/mp4" />
        </video>
        <Navigation />
        <div className={styles.header}>
          <h1 className={styles.welcome}>Maison My, la référence du Banh mi à Paris</h1>
          <fectcher.Form className={styles.subscribe}>
            <input type="text" name="email" className={styles.input} placeholder="addresse email..." />
            {/* <div className={styles.faim}> */}
            <button className={styles.btn}>Je reste informé</button>
            {/* </div> */}
          </fectcher.Form>
          <FaAngleDown className={styles.angleDown} onClick={scrollDown} />
        </div>
      </div>
      <div className={styles.message}>
        <h1>Banh mi, Bobuns, Riz, nouilles... Venez déguster nos petits plats savoureux !</h1>
        <p>
          Chaque bouchée de notre Banh mi, avec son pain croustillant, son porc mariné, ses légumes croquants, et sa
          touche de coriandre, vous transporte instantanément....
        </p>
      </div>
      <div className={styles.mansonry}>
        {[...Array(7)].map((x, i) => (
          <div className={styles.item} key={i}>
            <img src={`/images/food/${i + 1}.webp`} />
          </div>
        ))}
      </div>
    </div>
  );
}
