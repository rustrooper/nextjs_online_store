'use client';

import { useContext } from 'react';

import { UserContext } from '@/providers/UserProvider';

import { LogoutButton } from './LogoutButton';
import { NavLink } from './NavLink';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/rackets', label: 'Ракетки' },
  { href: '/rackets/top-10', label: 'Top10' },
];

export const Header = () => {
  const user = useContext(UserContext);

  return (
    <header className="flex items-center border-b border-gray-300 px-6 py-4">
      <div className="flex-1" />
      <h1 className="flex-1 text-center text-xl font-medium">TENNIS STORE</h1>
      <nav className="flex flex-1 items-center justify-end gap-2">
        {links.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          );
        })}
        {user?.login ? (
          <>
            <span className="text-black">{user.login}</span>
            <LogoutButton />
          </>
        ) : (
          <>
            <NavLink href="/login">Войти</NavLink>
            <NavLink href="/signup">Регистрация</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
