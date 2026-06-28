'use server';

import { AuthState } from '@/types/auth';
import { authenticate } from '@/services/authenticate';

export const loginAction = async (state: AuthState, formData: FormData): Promise<AuthState> => {
  return authenticate('/auth/login', formData, 'Неверный логин или пароль');
};
