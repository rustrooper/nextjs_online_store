'use client';

import { Star } from 'lucide-react';
import { BASE_API_URL } from '@/constants/api';
import { useIsFavoriteById, useSetIsFavorite } from '@/providers/favorite/hooks';

interface Props {
  racketId: number;
  isFavorite: boolean;
}

const handleFavorite = async ({ isFavorite, racketId }: Props) => {
  const url = `${BASE_API_URL}/product/${racketId}/favorite`;

  return isFavorite
    ? fetch(url, { credentials: 'include', method: 'DELETE' })
    : fetch(url, { credentials: 'include', method: 'POST' });
};

export const ToggleFavoriteButton = ({ isFavorite: isFavoriteInitial, racketId }: Props) => {
  const isFavorite = useIsFavoriteById({ id: racketId, isFavoriteInitial });
  const setIsFavorite = useSetIsFavorite();

  const handleClick = async () => {
    setIsFavorite({ id: racketId, isFavorite: !isFavorite });

    await handleFavorite({ isFavorite, racketId });
  };

  return (
    <button
      type="button"
      className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-black hover:border-gray-400"
      onClick={handleClick}
    >
      <Star
        size={20}
        className={isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
      />
      <span>{isFavorite ? 'В избранном' : 'В избранное'}</span>
    </button>
  );
};
