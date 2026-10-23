import Logo from '../common/Logo';

export default function BrandsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 w-full text-center">
      <h2 className="text-2xl font-bold text-[#3442B5] mb-8">Navegue por marcas</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {[1, 2, 3, 4, 5].map((brand) => (
          <div
            key={brand}
            className="w-40 h-40 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center p-6 hover:scale-105 transition cursor-pointer"
          >
            <Logo textClass="text-lg text-[#2A2359]" dotClass="w-1.5 h-1.5 mb-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
