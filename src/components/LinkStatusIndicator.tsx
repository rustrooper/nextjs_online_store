'use client';

import { useLinkStatus } from 'next/link';
import { cn } from '@/lib/utils';

export const LinkStatusIndicator = () => {
  const { pending } = useLinkStatus();
  return <span aria-hidden className={cn('link-hint', pending && 'is-pending')} />;
};
