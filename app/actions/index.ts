import { ActionFunctionArgs, json, LoaderFunctionArgs, TypedResponse } from '@remix-run/node';
import { createSupabaseServerClient } from '~/lib/supabase.server';
import { AuthError, User } from '@supabase/supabase-js';
import { resend } from '~/lib/resend';

interface HomeLoaderData {
  error?: AuthError;
  data?: {
    user: User;
  };
  code: number;
}

export async function IndexAction({ request }: ActionFunctionArgs) {
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

export async function indexLoder({ request }: LoaderFunctionArgs): Promise<TypedResponse<HomeLoaderData>> {
  const { supabaseClient: supabase } = createSupabaseServerClient(request);
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return json({ error, code: 500 });
  }

  return json({ data, code: 200 });
}
