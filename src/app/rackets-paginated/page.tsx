import { getRackets } from '@/services/get-rackets';
import { SWRConfig } from 'swr';
import { LIMIT } from '@/constants/pagination';
import { getRacketKey } from '@/helpers/rackets-key';
import { RacketsPaginatedContainer } from './container';

export default async function Page({ searchParams }: PageProps<'/rackets-paginated'>) {
  const { page } = await searchParams;

  let pageNumber = 1;
  if (typeof page === 'string') {
    pageNumber = parseInt(page) || 1;
  }

  const { data } = await getRackets({ page: pageNumber, limit: LIMIT });

  return (
    <SWRConfig value={{ fallback: { [getRacketKey(pageNumber)]: data } }}>
      <RacketsPaginatedContainer />
    </SWRConfig>
  );
}
