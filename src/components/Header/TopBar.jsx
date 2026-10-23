import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-2 text-xs text-[#9F9F9F]">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-2 text-center">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2A2359]" />
          <span>
            Compra <strong className="text-[#3442B5]">100% segura</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#2A2359]" />
          <span>
            <strong className="text-[#3442B5]">Frete grátis</strong> acima de R$ 200
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-[#2A2359]" />
          <span>
            <strong className="text-[#3442B5]">Parcele</strong> suas compras
          </span>
        </div>
      </div>
    </div>
  );
}
