'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/rackets', label: 'Ракетки' },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 justify-end gap-2">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href} className={isActive ? 'text-orange-500' : ''}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
