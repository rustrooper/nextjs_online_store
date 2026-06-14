import { Suspense } from 'react';
import { RacketContainer } from '@/components/Racket/RacketContainer';

export default async function RacketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <Suspense fallback={<div>Загружаем ракетку...</div>}>
      <RacketContainer id={id}></RacketContainer>
    </Suspense>
  );
}
