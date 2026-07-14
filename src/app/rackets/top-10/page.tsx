import { RacketGridSection } from '@/components/RacketGrid/RacketGridSection';
import { getTop10 } from '@/services/get-top-10';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Топ-10',
  description: 'Десять самых популярных теннисных ракеток',
};

export default function Top10Page() {
  return (
    <RacketGridSection title="Топ-10 ракеток" load={getTop10} />
  );
}
