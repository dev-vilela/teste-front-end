import SectionTitle from '../common/SectionTitle';
import ProductCard from '../ProductCard/ProductCard';

export default function RelatedProducts({ products, onOpenProduct }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 w-full">
      <SectionTitle className="mb-2">Produtos relacionados</SectionTitle>
      <div className="text-center mb-6">
        <a
          href="#ver-todos"
          className="text-xs font-bold text-[#3F3F3F] hover:text-[#3442B5]"
        >
          Ver todos
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((prod, idx) => (
          <ProductCard key={idx} product={prod} onOpen={onOpenProduct} />
        ))}
      </div>
    </section>
  );
}
