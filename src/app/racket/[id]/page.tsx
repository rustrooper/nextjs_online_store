import { RacketContainer } from '@/components/Racket/RacketContainer';
import { getRacketById } from '@/services/get-racket-by-id';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { data } = await getRacketById(id);

  if (!data) {
    return { title: 'Ракетка не найдена' };
  }

  return {
    title: data.name,
    description: data.description,
  };
}

export default async function RacketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <RacketContainer id={id} />;
}
