import heroImage from "../assets/img/image.png";

export default function HeroBanner() {
  return (
    <section className="relative my-0 overflow-hidden bg-black text-white">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-100"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />

      
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"
        aria-hidden="true"
      />
      {/* Conteúdo do banner */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-20 md:py-28">
        <h1 className="mb-2 max-w-xl text-3xl font-extrabold leading-tight md:text-5xl">
          Venha conhecer nossas promoções
        </h1>

        <p className="mb-6 text-xl font-semibold text-[#F1CD31] md:text-3xl">
          50% Off nos produtos
        </p>

        <button
          type="button"
          className="rounded-md bg-[#F1CD31] px-8 py-3 font-bold text-[#2A2359] shadow-lg transition hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-[#F1CD31] focus:ring-offset-2 focus:ring-offset-black"
          onClick={() => {
            document
              .getElementById("produtos")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Ver produtos
        </button>
      </div>
    </section>
  );
}
