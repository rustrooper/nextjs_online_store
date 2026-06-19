import { PropsWithChildren } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from '../NavLink';

interface Props {
  title: string;
  hrefToAll?: string;
}

export const RacketsSelection = ({ title, hrefToAll, children }: PropsWithChildren<Props>) => {
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
      <div className="mt-4 grid grid-cols-3 gap-4">{children}</div>
    </section>
  );
};
