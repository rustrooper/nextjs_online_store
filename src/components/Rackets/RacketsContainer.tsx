import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';
import { RacketsSelection } from '@/components/Rackets/RacketsSelection';
import { RacketCard } from '@/components/RacketCard';

interface Props {
  title: string;
  hrefToAll?: string;
  load: () => ServiceResponse<Racket[]>;
}

export const RacketsContainer = async ({ title, hrefToAll, load }: Props) => {
  const { isError, data } = await load();

  if (isError || !data) {
    return <div className="text-red-500">Не удалось загрузить ракетки</div>;
  }

  return (
    <RacketsSelection title={title} hrefToAll={hrefToAll}>
      {data.map((racket) => (
        <RacketCard key={racket.id} id={racket.id} name={racket.name} imageUrl={racket.imageUrl} />
      ))}
    </RacketsSelection>
  );
};
