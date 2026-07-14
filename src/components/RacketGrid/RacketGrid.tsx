import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';
import { RacketGridItem } from '@/components/RacketGrid/RacketGridItem';

interface Props {
  load: () => ServiceResponse<Racket[]>;
}

export const RacketGrid = async ({ load }: Props) => {
  const { isError, data } = await load();

  if (isError || !data) {
    return <div className="col-span-full text-red-500">Не удалось загрузить ракетки</div>;
  }

  return (
    <>
      {data.map((racket) => (
        <RacketGridItem key={racket.id} racket={racket} />
      ))}
    </>
  );
};
