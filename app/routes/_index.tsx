import { useTranslation } from 'react-i18next';
import { FaAngleDown } from 'react-icons/fa6';
import { json, useFetcher } from '@remix-run/react';
import { Layout } from '~/layout';
import { ActionFunctionArgs, LoaderFunctionArgs, TypedResponse } from '@remix-run/node';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import { AuthError, User } from '@supabase/supabase-js';
import { resend } from '~/lib/resend';
import styles from '../styles/index.module.scss';

interface HomeLoaderData {
  error?: AuthError;
  data?: {
    user: User;
  };
  code: number;
}

export async function loader({ request }: ActionFunctionArgs) {
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

export async function action({ request }: LoaderFunctionArgs): Promise<TypedResponse<HomeLoaderData>> {
  const { supabaseClient: supabase } = createSupabaseServerClient(request);
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return json({ error, code: 500 });
  }

  return json({ data, code: 200 });
}

export default function Home() {
  const { t } = useTranslation();
  const fectcher = useFetcher<typeof action>();
  const isSendingMessage = fectcher.state !== 'idle';
  const hasSuscribed = fectcher.data?.code === 200;

  const scrollDown = () => {
    console.log('WINDOW', window.innerHeight);

    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Layout>
      <div className={styles.index}>
        <div className={styles.hero}>
          <video loop muted autoPlay playsInline className={styles.video}>
            <source src="video.mp4" type="video/mp4" />
          </video>
          <div className={styles.header}>
            <h1 className={styles.welcome}>Maison My, la référence du Banh mi à Paris</h1>
            {isSendingMessage && <p>Souscription en cours</p>}
            {hasSuscribed && <p>Souscription effectuée !</p>}
            {!isSendingMessage && !hasSuscribed && (
              <fectcher.Form method="post" className={styles.subscribe}>
                <input type="text" name="email" className={styles.input} placeholder="addresse email..." />
                <button className={styles.btn}>PAR ICI LES REDUCS !</button>
              </fectcher.Form>
            )}
            <FaAngleDown className={styles.angleDown} onClick={scrollDown} />
          </div>
        </div>
        <div className={styles.message}>
          <h1>Banh mi, Bobuns, Riz, nouilles... Venez déguster nos petits plats savoureux !</h1>
          <p>
            Chaque bouchée de notre Banh mi, avec son pain croustillant, son porc mariné, ses légumes croquants, et sa touche de
            coriandre, vous transporte instantanément....
          </p>
        </div>
        <div className={styles.mansonry}>
          {[...Array(7)].map((_, i) => (
            <div className={styles.item} key={i}>
              <img src={`/images/food/${i + 1}.webp`} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
