import Link from 'next/link';
import { ComponentProps } from 'react';

// Server-safe wrapper around next/link that defaults prefetch to false.
// Pass `prefetch` explicitly to opt back into prefetching for a given link.
export const CustomLink = ({
  prefetch = false,
  ...props
}: ComponentProps<typeof Link>) => {
  return <Link prefetch={prefetch} {...props} />;
};
