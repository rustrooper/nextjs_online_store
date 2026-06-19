import { RacketsContainer } from '@/components/Rackets/RacketsContainer';
import { getTop10 } from '@/services/get-top-10';
import { Suspense } from 'react';

export default function Top10Page() {
  return (
    <Suspense fallback={<div>Загружаем топ-10…</div>}>
      <RacketsContainer title="Топ-10 ракеток" load={getTop10} />
    </Suspense>
  );
}