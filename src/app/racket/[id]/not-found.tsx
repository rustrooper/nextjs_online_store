import { NavLink } from '@/components/NavLink';

export default function RacketNotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <h1 className="text-4xl font-medium text-black">404</h1>
      <p className="text-gray-500">Такая ракетка не найдена</p>
      <NavLink href="/rackets" className="text-blue-500">
        Ко всем ракеткам
      </NavLink>
    </div>
  );
}
