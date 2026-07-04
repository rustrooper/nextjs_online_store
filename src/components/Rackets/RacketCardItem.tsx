'use client';

import { use } from 'react';

import { Racket } from '@/types/racket';
import { RacketCard } from '@/components/RacketCard';
import { ToggleFavoriteButton } from '@/components/ToggleFavoriteButton';
import { UserContext } from '@/providers/user/UserProvider';
import { useHydrateFavorite, useIsFavoriteById } from '@/providers/favorite/hooks';
import Image from 'next/image';

interface Props {
  racket: Racket;
}

export const RacketCardItem = ({ racket }: Props) => {
  const user = use(UserContext);

  const isFavoriteInitial = Boolean(racket.userData?.isFavorite);

  useHydrateFavorite({ id: racket.id, isFavoriteInitial });

  const isFavorite = useIsFavoriteById({ id: racket.id, isFavoriteInitial });

  return (
    <div className="relative flex flex-col gap-2">
      {isFavorite && (
        <Image
          src="http://localhost:4000/bookmark.png"
          alt="bookmark"
          className="pointer-events-none absolute top-2 right-2 z-10 h-8 w-8"
          width={24}
          height={24}
        />
      )}
      <RacketCard id={racket.id} name={racket.name} imageUrl={racket.imageUrl} />
      {user && <ToggleFavoriteButton racketId={racket.id} isFavorite={isFavoriteInitial} />}
    </div>
  );
};
