'use client';

import { Racket } from '@/types/racket';
import { createContext, PropsWithChildren, useCallback, useState } from 'react';

interface SetFavoriteParams {
  id: Racket['id'];
  isFavorite: boolean;
}

interface FavoriteContextType {
  favorites: Record<Racket['id'], boolean>;
  setIsFavorite: (params: SetFavoriteParams) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  setIsFavorite: () => {},
});

export const FavoriteProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<FavoriteContextType['favorites']>({});

  const setIsFavorite = useCallback(({ isFavorite, id }: SetFavoriteParams) => {
    setFavorites((prev) => {
      if (prev[id] === isFavorite) return prev;

      return {
        ...prev,
        [id]: isFavorite,
      };
    });
  }, []);

  return <FavoriteContext value={{ favorites, setIsFavorite }}>{children}</FavoriteContext>;
};
