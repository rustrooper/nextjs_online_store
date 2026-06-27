'use server';

import { AuthState } from '@/types/auth';
import { authenticate } from '@/services/authenticate';

export const signupAction = async (state: AuthState, formData: FormData): Promise<AuthState> => {
  return authenticate(
    '/auth/signup',
    formData,
    'Не удалось зарегистрироваться (возможно, логин занят)',
  );
};
