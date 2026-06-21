'use client';

import { createContext, FC, PropsWithChildren } from 'react';

import { User } from '@/types/user';

type Props = PropsWithChildren & {
  user?: User;
};

export const UserContext = createContext<User | undefined>(undefined);

export const UserProvider: FC<Props> = ({ user, children }) => {
  return <UserContext value={user}>{children}</UserContext>;
};
