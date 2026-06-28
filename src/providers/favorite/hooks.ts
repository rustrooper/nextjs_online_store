import { useContext, useEffect } from 'react';
import { FavoriteContext } from '@/providers/favorite/FavoriteProvider';
import { Racket } from '@/types/racket';

export const useIsFavoriteById = ({
  id,
  isFavoriteInitial,
}: {
  id: Racket['id'];
  isFavoriteInitial: boolean;
}) => {
  const { favorites } = useContext(FavoriteContext);

  const isFavoriteGlobal = favorites[id] ?? null;

  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return isFavorite;
};

export const useSetIsFavorite = () => {
  const { setIsFavorite } = useContext(FavoriteContext);

  return setIsFavorite;
};

// export const useHydrateFavorite = ({
//   id,
//   isFavoriteInitial,
// }: {
//   id: Racket['id'];
//   isFavoriteInitial: boolean;
// }) => {
//   const setIsFavorite = useSetIsFavorite();

//   useEffect(() => {
//     if (typeof isFavoriteInitial === 'boolean') {
//       setIsFavorite({ isFavorite: isFavoriteInitial, id });
//     }
//   }, [id, isFavoriteInitial, setIsFavorite]);
// };
