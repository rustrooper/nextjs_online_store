import { RacketsContainer } from '@/components/Rackets/RacketsContainer';
import { getTop10 } from '@/services/get-top-10';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Tennis store - top 10',
  description: 'Страница с топ-10 ракетками',
};

export default function Top10Page() {
  return (
    <Suspense fallback={<div>Загружаем топ-10…</div>}>
      <RacketsContainer title="Топ-10 ракеток" load={getTop10} />
    </Suspense>
  );
}
