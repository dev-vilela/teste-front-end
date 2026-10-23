import TopBar from './TopBar';
import MainHeader from './MainHeader';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
      <TopBar />
      <MainHeader />
      <NavBar />
    </header>
  );
}
