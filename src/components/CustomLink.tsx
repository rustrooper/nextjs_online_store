import Link from 'next/link';
import { ComponentProps } from 'react';

export const CustomLink = ({ prefetch = false, ...props }: ComponentProps<typeof Link>) => {
  return <Link prefetch={prefetch} {...props} />;
};
