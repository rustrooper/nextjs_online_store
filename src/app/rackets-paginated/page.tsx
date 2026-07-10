import { getRackets } from '@/services/get-rackets';
import { SWRConfig } from 'swr';
import { LIMIT } from '@/constants/pagination';
import { getRacketKey } from '@/helpers/rackets-key';
import { RacketsPaginatedContainer } from './container';
import { getBrands } from '@/services/get-brands';
import { BrandFilter } from '@/components/BrandFilter';

export default async function Page({ searchParams }: PageProps<'/rackets-paginated'>) {
  const { page, brand } = await searchParams;
  const { data: brands_data } = await getBrands();

  const brands = brands_data?.map((b) => b.name) ?? [];

  let pageNumber = 1;
  if (typeof page === 'string') {
    pageNumber = parseInt(page) || 1;
  }

  const brandParam = typeof brand === 'string' ? brand : undefined;

  const { data } = await getRackets({ page: pageNumber, limit: LIMIT, brand: brandParam });

  return (
    <SWRConfig value={{ fallback: { [getRacketKey(pageNumber, brandParam)]: data } }}>
      <BrandFilter brands={brands} />
      <RacketsPaginatedContainer />
    </SWRConfig>
  );
}
