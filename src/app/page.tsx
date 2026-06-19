import { Suspense } from 'react';
import { RacketsContainer } from '@/components/Rackets/RacketsContainer';
import { getRackets } from '@/services/get-rackets';
import { getTop10 } from '@/services/get-top-10';
import { RacketsSkeleton } from '@/components/Rackets/RacketsSkeleton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Магазин теннисных ракеток',
  description: 'Главная страница магазина',
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <Suspense fallback={<RacketsSkeleton />}>
        <RacketsContainer
          title="Ракетки"
          hrefToAll="/rackets"
          load={() => getRackets({ page: 1, limit: 10 })}
        />
      </Suspense>
      <Suspense fallback={<div>Загружаем топ-10…</div>}>
        <RacketsContainer title="Топ-10" hrefToAll="/rackets/top-10" load={getTop10} />
      </Suspense>
    </div>
  );
}
