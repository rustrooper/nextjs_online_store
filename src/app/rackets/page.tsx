import { BrandFilter } from '@/components/BrandFilter';
import { RacketsContainer } from '@/components/Rackets/RacketsContainer';
import { getRackets } from '@/services/get-rackets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ракетки',
  description: 'Каталог теннисных ракеток',
};

export default function RacketsPage() {
  return (
    <div className="flex gap-8">
      <BrandFilter brands={[]} />
      <div className="flex-1">
        <RacketsContainer title="Ракетки" load={() => getRackets({ page: 1, limit: 20 })} />
      </div>
    </div>
  );
}
