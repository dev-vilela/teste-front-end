import { Crown } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';

export default function NavBar() {
  return (
    <nav className="border-t border-gray-100 bg-white hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs font-bold text-[#9F9F9F] uppercase tracking-wider py-3">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`hover:text-[#3442B5] transition ${
              link.highlight ? 'text-[#3442B5]' : ''
            } ${link.crown ? 'flex items-center gap-1' : ''}`}
          >
            {link.crown && <Crown className="w-4 h-4 text-[#F1CD31]" />}
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
