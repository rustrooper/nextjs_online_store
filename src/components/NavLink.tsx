'use client';

import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { CustomLink } from './CustomLink';

export const NavLink = (props: ComponentProps<typeof CustomLink>) => {
  const { href, children, className, ...rest } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <CustomLink href={href} className={cn(className, isActive && 'text-accent')} {...rest}>
      {children}
    </CustomLink>
  );
};
