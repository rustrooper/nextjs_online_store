import { RacketDetailsContainer } from '@/components/RacketDetails/RacketDetailsContainer';
import { getRacketMetadataById } from '@/services/get-racket-metadata-by-id';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { data } = await getRacketMetadataById(id);

  if (!data) {
    return { title: 'Ракетка не найдена' };
  }

  return {
    title: data.name,
    description: data.description,
  };
}

export default async function RacketPage(props: PageProps<'/racket/[id]'>) {
  const { id } = await props.params;

  return <RacketDetailsContainer id={id} />;
}
