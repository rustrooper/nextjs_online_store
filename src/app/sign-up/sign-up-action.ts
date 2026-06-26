'use server';

import { cookies } from 'next/headers';

import { BASE_API_URL } from '@/constants/api';
import { parseSetCookie } from '@/helpers/parse-set-cookie';
import { AuthState } from '@/app/sign-in/sign-in-action';

export const signupAction = async (state: AuthState, formData: FormData): Promise<AuthState> => {
  const login = formData.get('login')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';

  const result = await fetch(`${BASE_API_URL}/auth/signup`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ login, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (result.status !== 200) {
    return { error: 'Не удалось зарегистрироваться (возможно, логин занят)' };
  }

  const cookiesStore = await cookies();
  const setCookieHeader = result.headers.getSetCookie();

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: '', redirectTo: '/' };
};
