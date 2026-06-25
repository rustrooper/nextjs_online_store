'use client';

import { useEffect } from 'react';
import './global.css';

export default function GlobalError({
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
    <html lang="ru">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center text-gray-500">
        <h1 className="text-4xl font-medium text-black">Что-то пошло не так</h1>
        <p>Произошла критическая ошибка приложения.</p>
        <div className="flex gap-4">
          <button onClick={() => unstable_retry()} className="text-blue-500">
            Попробовать снова
          </button>
          {/* обычная ссылка, а не NavLink: оболочка приложения сломана,
              нужна полная перезагрузка страницы */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="text-blue-500">
            На главную
          </a>
        </div>
      </body>
    </html>
  );
}
