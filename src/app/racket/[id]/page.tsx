import { RacketContainer } from '@/components/Racket/RacketContainer';

export default async function RacketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <RacketContainer id={id} />;
}
