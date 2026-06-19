import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Tennis Store',
    default: 'Tennis Store - магазин теннисных ракетов',
  },
  description: 'Каталог теннисных ракеток, подборка топ-10 и другие модели',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col text-gray-500">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
