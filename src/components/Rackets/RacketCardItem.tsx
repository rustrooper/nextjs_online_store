'use client';

import { useContext } from 'react';

import { Racket } from '@/types/racket';
import { RacketCard } from '@/components/RacketCard';
import { ToggleFavoriteButton } from '@/components/ToggleFavoriteButton';
import { UserContext } from '@/providers/user/UserProvider';

interface Props {
  racket: Racket;
}

export const RacketCardItem = ({ racket }: Props) => {
  const user = useContext(UserContext);

  return (
    <div className="flex flex-col gap-2">
      <RacketCard id={racket.id} name={racket.name} imageUrl={racket.imageUrl} />
      {user && (
        <ToggleFavoriteButton
          racketId={racket.id}
          isFavorite={Boolean(racket.userData?.isFavorite)}
        />
      )}
    </div>
  );
};
