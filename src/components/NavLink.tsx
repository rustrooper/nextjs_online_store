'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export const NavLink = (props: ComponentProps<typeof Link>) => {
  const { href, prefetch = false, children, className, ...rest } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={cn(className, isActive && 'text-orange-500')}
      {...rest}
    >
      {children}
    </Link>
  );
};
