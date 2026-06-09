import { NavLink } from './NavLink';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/rackets', label: 'Ракетки' },
];

export const Header = () => {
  return (
    <header className="flex items-center border-b border-gray-300 px-6 py-4">
      <div className="flex-1" />
      <h1 className="flex-1 text-center text-xl font-medium">TENNIS STORE</h1>
      <nav className="flex flex-1 justify-end gap-2">
        {links.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
