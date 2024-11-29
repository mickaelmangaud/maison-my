import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import { SupabaseClient } from '@supabase/supabase-js';

export const createSupabaseServerClient = (request: Request): { supabaseClient: SupabaseClient; headers: Headers } => {
  const headers = new Headers();

  const supabaseClient = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
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
  return { supabaseClient, headers };
};
