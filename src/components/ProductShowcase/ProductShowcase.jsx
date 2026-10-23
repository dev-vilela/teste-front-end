import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../ProductCard/ProductCard';
import { PRODUCT_TABS } from '../../data/navigation';
import { useCarousel } from '../../hooks/useCarousel';

export default function ProductShowcase({ products, loading, onOpenProduct }) {
  const [activeTab, setActiveTab] = useState('CELULAR');
  const { index, itemsPerPage, next, prev } = useCarousel(products.length, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 w-full">
      <SectionTitle>Produtos relacionados</SectionTitle>

      {/* Submenu Tabs */}
      <div className="flex flex-wrap justify-center border border-gray-200 rounded-md bg-white mb-8 overflow-hidden">
        {PRODUCT_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-xs font-bold transition border-r last:border-none border-gray-200 ${
              activeTab === tab
                ? 'text-[#3442B5] bg-gray-50 border-b-2 border-b-[#3442B5]'
                : 'text-[#9F9F9F] hover:text-[#3442B5]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#3442B5]"></div>
        </div>
      ) : (
        <div className="relative group px-2 md:px-8">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#3442B5] shadow-md rounded-full p-2 hover:bg-[#3442B5] hover:text-white transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden py-2">
            {products.slice(index, index + itemsPerPage).map((prod, idx) => (
              <ProductCard
                key={idx}
                product={prod}
                onOpen={onOpenProduct}
                zoomOnHover
              />
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#3442B5] shadow-md rounded-full p-2 hover:bg-[#3442B5] hover:text-white transition"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
