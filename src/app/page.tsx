import { RacketGridSection } from '@/components/RacketGrid/RacketGridSection';
import { getRackets } from '@/services/get-rackets';
import { getTop10 } from '@/services/get-top-10';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Подборка ракеток и топ-10 моделей теннисного магазина',
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <RacketGridSection
        title="Ракетки"
        hrefToAll="/rackets"
        load={() => getRackets({ page: 1, limit: 5 })}
      />
      <RacketGridSection title="Топ-10" hrefToAll="/rackets/top-10" load={getTop10} />
    </div>
  );
}
