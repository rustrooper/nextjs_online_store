'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

interface Props {
  brands: string[];
}

export const BrandFilter = ({ brands }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedBrand = searchParams.get('brand') ?? 'All';

  const handleSelect = (brand: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');

    if (brand === 'All') {
      params.delete('brand');
    } else params.set('brand', brand);

    const newURL = params.toString() ? `${pathname}?${params.toString()}` : `${pathname}`;

    router.replace(newURL);
  };

  const options = ['All', ...brands];

  return (
    <div className="w-40 shrink-0">
      <span className="text-sm font-medium text-gray-400">Бренд</span>
      <ul className="mt-2 flex flex-col gap-1">
        {options.map((brand) => {
          const isActive = brand === selectedBrand;

          return (
            <li key={brand}>
              <button
                type="button"
                onClick={() => handleSelect(brand)}
                className={`flex cursor-pointer items-center gap-2 text-sm transition-colors ${
                  isActive ? 'font-medium text-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-black ${isActive ? 'opacity-100' : 'opacity-0'}`}
                />
                {brand}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
