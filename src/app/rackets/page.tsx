import { BrandFilter } from '@/components/BrandFilter';
import { RacketCard } from '@/components/RacketCard';
import { rackets as cardsData } from '../../../mock';

export default function RacketPage() {
  const brands = [...new Set(cardsData.map((racket) => racket.brand.name))];

  return (
    <div className="flex gap-8">
      <BrandFilter brands={brands} />
      <div className="flex-1">
        <h2 className="text-2xl font-medium text-black">Ракетки</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {cardsData.slice(0, 3).map((data) => (
            <RacketCard key={data.id} id={data.id} name={data.name} imageUrl={data.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}
