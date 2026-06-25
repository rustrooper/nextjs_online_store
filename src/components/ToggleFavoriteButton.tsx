import { Star } from 'lucide-react';

interface Props {
  productId: number;
  isFavorite: boolean;
}

export const ToggleFavoriteButton = ({ isFavorite }: Props) => {
  return (
    <button
      type="button"
      className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-black hover:border-gray-400"
    >
      <Star
        size={20}
        className={isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
      />
      <span>{isFavorite ? 'В избранном' : 'В избранное'}</span>
    </button>
  );
};
