import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PropsWithChildren } from 'react';
import './global.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col text-gray-500">
        <Header/>
        <main className="flex-1 p-6">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
