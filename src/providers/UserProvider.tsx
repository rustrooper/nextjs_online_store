'use client';

import { createContext, PropsWithChildren } from 'react';

import { User } from '@/types/user';

type Props = PropsWithChildren & {
  user?: User;
};

export const UserContext = createContext<User | undefined>(undefined);

export const UserProvider = ({ user, children }: Props) => {
  return <UserContext value={user}>{children}</UserContext>;
};
