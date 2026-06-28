'use client';

import { AuthState } from '@/types/auth';
import { useActionState, useEffect } from 'react';

type Variant = 'sign-up' | 'sign-in';

type AuthTexts = { title: string; submit: string; submitting: string };

interface Props {
  action: (state: AuthState, formData: FormData) => Promise<AuthState>;
  variant: Variant;
}

const SIGN_IN: AuthTexts = {
  title: 'Вход',
  submit: 'Войти',
  submitting: 'Входим...',
};

const SIGN_UP: AuthTexts = {
  title: 'Регистрация',
  submit: 'Зарегистрироваться',
  submitting: 'Регистрируем...',
};

const texts: Record<Variant, AuthTexts> = {
  'sign-in': SIGN_IN,
  'sign-up': SIGN_UP,
};

export const AuthForm = ({ action, variant }: Props) => {
  const [state, formAction, isPending] = useActionState(action, {});

  const { error, redirectTo } = state;

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction} className="mx-auto flex max-w-sm flex-col gap-4">
      <h1 className="text-xl font-medium text-black">{texts[variant].title}</h1>

      <label className="flex flex-col gap-1">
        <span>Логин</span>
        <input
          name="login"
          type="text"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-black"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Пароль</span>
        <input
          name="password"
          type="password"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-black"
        />
      </label>

      {error && <div className="text-red-500">{error}</div>}

      <button
        disabled={isPending}
        className="bg-accent rounded-lg px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending ? texts[variant].submitting : texts[variant].submit}
      </button>
    </form>
  );
};
