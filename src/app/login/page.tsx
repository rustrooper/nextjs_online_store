'use client';

import { useActionState, useEffect } from 'react';

import { loginAction } from './login-action';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, {});

  const { error, redirectTo } = state;

  useEffect(() => {
    if (redirectTo) {
      document.location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction} className="mx-auto flex max-w-sm flex-col gap-4">
      <h1 className="text-xl font-medium text-black">Вход</h1>

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
        className="rounded-lg bg-accent px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending ? 'Входим…' : 'Войти'}
      </button>
    </form>
  );
}
