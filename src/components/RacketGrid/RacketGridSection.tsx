import { Suspense } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';
import { RacketGrid } from '@/components/RacketGrid/RacketGrid';
import { RacketGridSkeleton } from '@/components/RacketGrid/RacketGridSkeleton';
import { NavLink } from '../NavLink';

interface Props {
  title: string;
  hrefToAll?: string;
  load: () => ServiceResponse<Racket[]>;
}

export const RacketGridSection = ({ title, hrefToAll, load }: Props) => {
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
        <Suspense fallback={<RacketGridSkeleton count={5} />}>
          <RacketGrid load={load} />
        </Suspense>
      </div>
    </section>
  );
};
