import { Suspense } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';
import { RacketCards } from '@/components/Rackets/RacketCards';
import { RacketsSkeleton } from '@/components/Rackets/RacketsSkeleton';
import { NavLink } from '../NavLink';

interface Props {
  title: string;
  hrefToAll?: string;
  load: () => ServiceResponse<Racket[]>;
}

export const RacketsContainer = ({ title, hrefToAll, load }: Props) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-black">{title}</h2>
        {hrefToAll && (
          <NavLink className="flex items-center gap-1 text-blue-500" href={hrefToAll}>
            Все
            <ArrowUpRight size={24} />
          </NavLink>
        )}
      </div>
      <div className="mt-4 grid grid-cols-5 gap-4">
        <Suspense fallback={<RacketsSkeleton count={5} />}>
          <RacketCards load={load} />
        </Suspense>
      </div>
    </section>
  );
};
