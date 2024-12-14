import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import { Session, SupabaseClient, User } from '@supabase/supabase-js';
import { jwtDecode } from 'jwt-decode';
import { Database } from 'supabase/database.types';

interface SupabaseServerClient {
  supabaseClient: SupabaseClient<Database>;
  headers: Headers;
  session: Session | null;
  user: User | null;
  role: 'user' | 'admin';
}

interface JwtType {
  user_role: 'user' | 'admin';
}

export const createSupabaseServerClient = async (request: Request): Promise<SupabaseServerClient> => {
  const headers = new Headers();
  let role: JwtType['user_role'] = 'user';

  const supabaseClient = createServerClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '');
      },
      setAll(cookies) {
        cookies.forEach(({ name, value, options }) =>
          headers.append('Set-Cookie', serializeCookieHeader(name, value, options)),
        );
      },
    },
  });

  const {
    data: { session },
    error: sessionError,
  } = await supabaseClient.auth.getSession();

  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  console.log('user here', user, userError);

  if (!sessionError && !userError) {
    const jwt = jwtDecode<JwtType>(session?.access_token || '');
    role = jwt.user_role;
  }

  return { supabaseClient, headers, session, user, role };
};
