'use client';

import { useState } from 'react';

interface Props {
  brands: string[];
}

export const BrandFilter = ({ brands }: Props) => {
  const [selected, setSelected] = useState('All');

  const options = ['All', ...brands];

  return (
    <div className="w-40 shrink-0">
      <span className="text-sm font-medium text-gray-400">Бренд</span>
      <ul className="mt-2 flex flex-col gap-1">
        {options.map((brand) => {
          const isActive = brand === selected;

          return (
            <li key={brand}>
              <button
                type="button"
                onClick={() => setSelected(brand)}
                className={`flex items-center gap-2 text-sm transition-colors ${
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
