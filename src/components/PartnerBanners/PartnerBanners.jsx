
import parceirosImage from '../assets/img/parceiros.png';

export default function PartnerBanners() {
  return (
    <section className="mx-auto w-full max-w-7xl bg-white px-4 py-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="min-h-[280px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${parceirosImage})`,
            }}
            role="img"
            aria-label="Banner de parceiros"
          />
        ))}
      </div>
    </section>
  );
}
