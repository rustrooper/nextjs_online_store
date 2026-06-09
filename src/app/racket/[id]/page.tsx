import { notFound } from 'next/navigation';
import { rackets } from '@mock';
import { RacketCard } from '@/components/RacketCard';

export function generateStaticParams() {
  return rackets.slice(0, 3).map((racket) => ({
    id: String(racket.id),
  }));
}

export default async function RacketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const racket = rackets.find((item) => item.id === Number(id));

  if (!racket) {
    notFound();
  }

  return (
    <div className="flex items-start gap-20">
      <div className="flex flex-1 flex-col gap-2 pt-20">
        <span>{racket.brand.name}</span>
        <h1 className="text-2xl font-medium text-black">{racket.name}</h1>
        <p className="text-lg text-black">{racket.description}</p>
      </div>
      <div className="shrink-0 basis-2/5">
        <RacketCard id={racket.id} name={racket.name} imageUrl={racket.imageUrl} showName={false} />
      </div>
      <span className="flex-1 pt-20 text-3xl font-medium text-black">$ {racket.price}</span>
    </div>
  );
}
