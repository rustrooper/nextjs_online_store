import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';
import { RacketCard } from '@/components/RacketCard';

interface Props {
  load: () => ServiceResponse<Racket[]>;
}

export const RacketCards = async ({ load }: Props) => {
  const { isError, data } = await load();

  if (isError || !data) {
    return <div className="col-span-full text-red-500">Не удалось загрузить ракетки</div>;
  }

  return (
    <>
      {data.map((racket) => (
        <RacketCard key={racket.id} id={racket.id} name={racket.name} imageUrl={racket.imageUrl} />
      ))}
    </>
  );
};
