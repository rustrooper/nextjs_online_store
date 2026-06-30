'use client';

import { useTransition } from 'react';

import { BASE_API_URL } from '@/constants/api';

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    method: 'DELETE',
    credentials: 'include',
  });

  location.assign('/');
};

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(handleLogout)}
      disabled={isPending}
      className="cursor-pointer"
    >
      Выйти
    </button>
  );
};
