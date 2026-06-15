import Image from 'next/image';

import { CustomLink } from './CustomLink';

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  showName?: boolean;
}

export const RacketCard = ({ id, name, imageUrl, showName = true }: Props) => {
  return (
    <CustomLink href={`/racket/${id}`} className="flex flex-col gap-2">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-300">
        <Image src={imageUrl} alt={name} fill className="object-contain" />
      </div>
      {showName && <span>{name}</span>}
    </CustomLink>
  );
};
