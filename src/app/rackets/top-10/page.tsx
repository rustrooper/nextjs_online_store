import { RacketsContainer } from '@/components/Rackets/RacketsContainer';
import { getTop10 } from '@/services/get-top-10';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Топ-10',
  description: 'Десять самых популярных теннисных ракеток',
};

export default function Top10Page() {
  return (
    <RacketsContainer title="Топ-10 ракеток" load={getTop10} />
  );
}
