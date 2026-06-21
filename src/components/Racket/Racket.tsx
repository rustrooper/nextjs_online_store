import { Star } from 'lucide-react';

import { Racket as RacketType } from '@/types/racket';
import { RacketCard } from '../RacketCard';

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
          <button
            type="button"
            className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-black hover:border-gray-400"
          >
            <Star
              size={20}
              className={
                racket.userData.isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
              }
            />
            <span>{racket.userData.isFavorite ? 'В избранном' : 'В избранное'}</span>
          </button>
        )}
      </div>
      <div className="shrink-0 basis-2/5">
        <RacketCard id={racket.id} name={racket.name} imageUrl={racket.imageUrl} showName={false} />
      </div>
      <span className="flex-1 pt-20 text-3xl font-medium text-black">$ {racket.price}</span>
    </div>
  );
};
