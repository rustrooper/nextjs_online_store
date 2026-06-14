import { NavLink } from '@/components/NavLink';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <h1 className="text-4xl font-medium text-black">404</h1>
      <p className="text-gray-500">Страница не найдена</p>
      <NavLink href="/" className="text-blue-500">
        На главную
      </NavLink>
    </div>
  );
}
