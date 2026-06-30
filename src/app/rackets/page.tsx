import { BrandFilter } from '@/components/BrandFilter';
import { RacketsContainer } from '@/components/Rackets/RacketsContainer';
import { getBrands } from '@/services/get-brands';
import { getRackets } from '@/services/get-rackets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ракетки',
  description: 'Каталог теннисных ракеток',
};

export default async function RacketsPage({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string }>;
}) {
  const { brand } = await searchParams;
  const { isError, data } = await getBrands();

  const brands = data?.map((b) => b.name) ?? [];

  return (
    <div className="flex gap-8">
      <BrandFilter brands={brands} />
      <div className="flex-1">
        <RacketsContainer title="Ракетки" load={() => getRackets({ page: 1, limit: 20, brand })} />
      </div>
    </div>
  );
}
