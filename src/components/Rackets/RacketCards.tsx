import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';
import { RacketCardItem } from '@/components/Rackets/RacketCardItem';

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
        <RacketCardItem key={racket.id} racket={racket} />
      ))}
    </>
  );
};
