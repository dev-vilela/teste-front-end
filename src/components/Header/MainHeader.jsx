import { Search, Heart, User, ShoppingCart, Store } from 'lucide-react';
import Logo from '../common/Logo';

export default function MainHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <Logo className="cursor-pointer" />

      {/* Search Input Bar */}
      <div className="relative w-full md:w-[600px]">
        <input
          type="text"
          placeholder="O que você está buscando?"
          className="w-full bg-[#F6F5FA] rounded-md py-3 px-4 pr-12 text-sm text-[#3F3F3F] focus:outline-none focus:ring-2 focus:ring-[#3442B5]"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9F9F9F] hover:text-[#3442B5] transition">
          <Search className="w-5 h-5" />
        </button>
      </div>

      
      <div className="flex items-center gap-6 text-[#9F9F9F]">
        <button className="hover:text-[#3442B5] transition flex flex-col items-center">
          <Store className="w-6 h-6" />
        </button>
        <button className="hover:text-[#3442B5] transition flex flex-col items-center">
          <Heart className="w-6 h-6" />
        </button>
        <button className="hover:text-[#3442B5] transition flex flex-col items-center">
          <User className="w-6 h-6" />
        </button>
        <button className="hover:text-[#3442B5] transition flex flex-col items-center relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-2 bg-[#F71963] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </div>
  );
}
