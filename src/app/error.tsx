'use client';

import { useEffect } from 'react';
import { NavLink } from '@/components/NavLink';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <h1 className="text-4xl font-medium text-black">Что-то пошло не так</h1>
      <p className="text-gray-500">Не удалось отобразить страницу.</p>
      <div className="flex gap-4">
        <button onClick={() => unstable_retry()} className="text-blue-500">
          Попробовать снова
        </button>
        <NavLink href="/" className="text-blue-500">
          На главную
        </NavLink>
      </div>
    </div>
  );
}
