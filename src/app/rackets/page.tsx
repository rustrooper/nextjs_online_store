import { BrandFilter } from '@/components/BrandFilter';
import { RacketsContainer } from '@/components/Rackets/RacketsContainer';
import { getRackets } from '@/services/get-rackets';
import { Suspense } from 'react';

export default function RacketsPage() {
  return (
    <div className="flex gap-8">
      <BrandFilter brands={[]} />
      <div className="flex-1">
        <Suspense fallback={<div>Загружаем ракетки...</div>}>
          <RacketsContainer title="Ракетки" load={() => getRackets({ page: 1, limit: 20 })} />
        </Suspense>
      </div>
    </div>
  );
}
