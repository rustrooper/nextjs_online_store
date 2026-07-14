'use client';

import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import { BASE_API_URL } from '@/constants/api';
import { LIMIT } from '@/constants/pagination';
import { getRacketKey } from '@/helpers/rackets-key';
import { Racket } from '@/types/racket';
import { RacketGridSkeleton } from '@/components/RacketGrid/RacketGridSkeleton';
import { RacketGridItem } from '@/components/RacketGrid/RacketGridItem';

const fetcher = async (key: string) => {
  const result = await fetch(`${BASE_API_URL}/${key}`, {
    credentials: 'include',
  });

  if (!result.ok) {
    throw new Error('Ошибка запроса');
  }

  return result.json();
};

export const RacketsPaginatedContainer = () => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '') || 1;
  const brand = searchParams.get('brand');

  const { data, error, isValidating } = useSWR<Racket[]>(getRacketKey(page, brand), fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    if (brand) params.set('brand', brand.toString());
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  if (error) return <div className="col-span-full text-red-500">Не удалось загрузить ракетки</div>;

  if (!data)
    return (
      <div className="mt-4 grid grid-cols-5 gap-4">
        <RacketGridSkeleton count={LIMIT} />
      </div>
    );

  if (data.length === 0) return <div>empty</div>;

  return (
    <>
      <div className="mt-4 grid grid-cols-5 gap-4">
        {isValidating ? (
          <RacketGridSkeleton count={LIMIT} />
        ) : (
          data.map((r) => <RacketGridItem key={r.id} racket={r} />)
        )}
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        {page > 1 && (
          <button
            onClick={() => updatePage(page - 1)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Назад
          </button>
        )}
        <span className="text-sm font-medium text-gray-600">{page}</span>
        {data.length === LIMIT && (
          <button
            onClick={() => updatePage(page + 1)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Вперёд
          </button>
        )}
      </div>
    </>
  );
};
