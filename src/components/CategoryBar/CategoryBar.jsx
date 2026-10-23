import { CATEGORIES } from '../../data/categories';

export default function CategoryBar() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div
                className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-200 ${
                  cat.active
                    ? 'bg-white shadow-md border-2 border-transparent'
                    : 'bg-white hover:shadow-md'
                }`}
              >
                <Icon
                  className={`w-10 h-10 ${
                    cat.active ? 'text-[#3442B5]' : 'text-[#4E4E4E]'
                  }`}
                />
              </div>
              <span
                className={`text-sm mt-3 text-center font-semibold ${
                  cat.active ? 'text-[#3442B5]' : 'text-[#4E4E4E]'
                }`}
              >
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
