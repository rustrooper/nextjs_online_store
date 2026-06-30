import { useContext, useEffect } from 'react';
import { FavoriteContext } from '@/providers/favorite/FavoriteProvider';
import { Racket } from '@/types/racket';

interface FavoriteHookType {
  id: Racket['id'];
  isFavoriteInitial: boolean;
}

export const useIsFavoriteById = ({ id, isFavoriteInitial }: FavoriteHookType) => {
  const { favorites } = useContext(FavoriteContext);

  const isFavoriteContext = favorites[id] ?? null;

  const isFavorite = isFavoriteContext ?? isFavoriteInitial;

  return isFavorite;
};

export const useSetIsFavorite = () => {
  const { setIsFavorite } = useContext(FavoriteContext);

  return setIsFavorite;
};

export const useHydrateFavorite = ({ id, isFavoriteInitial }: FavoriteHookType) => {
  const setIsFavorite = useSetIsFavorite();

  useEffect(() => {
    if (typeof isFavoriteInitial === 'boolean') {
      setIsFavorite({ isFavorite: isFavoriteInitial, id });
    }
  }, [id, isFavoriteInitial, setIsFavorite]);
};
