import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="flex items-center border-b border-gray-300 px-6 py-4">
      <div className="flex-1" />
      <h1 className="flex-1 text-center text-xl font-medium">TENNIS STORE</h1>
      <Nav></Nav>
    </header>
  );
};
