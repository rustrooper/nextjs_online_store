import { getRacketById } from '@/services/get-racket-by-id';
import { notFound } from 'next/navigation';
import { RacketDetails } from '@/components/RacketDetails/RacketDetails';

interface Props {
  id: string;
}

export const RacketDetailsContainer = async ({ id }: Props) => {
  const { isError, data } = await getRacketById(id);

  if (isError) {
    return <div className="text-red-500">Не удалось загрузить ракетку</div>;
  }

  if (!data) {
    notFound();
  }

  return <RacketDetails racket={data} />;
};
