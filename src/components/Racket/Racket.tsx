import { Racket as RacketType } from '@/types/racket';
import { RacketCard } from '../RacketCard';
import { ToggleFavoriteButton } from '../ToggleFavoriteButton';

interface Props {
  racket: RacketType;
}

export const Racket = ({ racket }: Props) => {
  return (
    <div className="flex items-start gap-20">
      <div className="flex flex-1 flex-col gap-2 pt-20">
        <span>{racket.brand.name}</span>
        <h1 className="text-2xl font-medium text-black">{racket.name}</h1>
        <p className="text-lg text-black">{racket.description}</p>
        {racket.userData && (
          <ToggleFavoriteButton racketId={racket.id} isFavorite={racket.userData.isFavorite} />
        )}
      </div>
      <div className="shrink-0 basis-2/5">
        <RacketCard id={racket.id} name={racket.name} imageUrl={racket.imageUrl} showName={false} />
      </div>
      <span className="flex-1 pt-20 text-3xl font-medium text-black">$ {racket.price}</span>
    </div>
  );
};
