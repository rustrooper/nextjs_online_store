import { RacketCard } from '@/components/RacketCard';
import { rackets as cardsData } from '@mock';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-black">Ракетки</h2>
        <Link className="flex items-center gap-1 text-blue-500" href="/rackets">
          Все
          <ArrowUpRight size={24} />
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {cardsData.slice(0, 3).map((data) => (
          <RacketCard key={data.id} id={data.id} name={data.name} imageUrl={data.imageUrl} />
        ))}
      </div>
    </>
  );
}
