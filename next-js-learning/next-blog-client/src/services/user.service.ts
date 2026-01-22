import { env } from '@/env';
import { cookies } from 'next/headers';

const AUTH_URL = env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      // console.log(cookieStore.get('better-auth.session_token'));

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: 'no-store', // we never want user-related stale data
      });
      const session = await res.json();

      if (session === null) {
        return { data: null, error: { message: 'Session is missing.' } };
      }

      return { data: session, error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error: { message: 'Something Went Wrong!' } };
    }
  },
};
