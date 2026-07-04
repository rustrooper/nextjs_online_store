import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { UserProvider } from '@/providers/user/UserProvider';
import { getUser } from '@/services/get-user';
import './global.css';
import { FavoriteProvider } from '@/providers/favorite/FavoriteProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | Tennis Store',
    default: 'Tennis Store — магазин теннисных ракеток',
  },
  description: 'Каталог теннисных ракеток, подборка топ-10 и другие модели',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const { data: user } = await getUser();

  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col text-gray-500">
        <NextTopLoader
          color="var(--color-accent)"
          height={3}
          showSpinner={false}
          crawlSpeed={400}
        />
        <UserProvider user={user}>
          <FavoriteProvider>
            <Header />
            <main className="flex-1 p-6">{children}</main>
            <Footer />
          </FavoriteProvider>
        </UserProvider>
      </body>
    </html>
  );
}
