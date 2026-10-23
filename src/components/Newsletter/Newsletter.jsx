import { useNewsletter } from '../../hooks/useNewsletter';

export default function Newsletter() {
  const {
    name,
    setName,
    email,
    setEmail,
    accepted,
    setAccepted,
    message,
    handleSubmit,
  } = useNewsletter();

  return (
    <section className="bg-[#2A2359] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold uppercase tracking-wide">
            Inscreva-se na nossa newsletter
          </h3>
          <p className="text-sm text-gray-300 mt-1 max-w-md">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da
            Econverse.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white text-[#3F3F3F] px-4 py-3 rounded text-sm min-w-[220px] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-[#3F3F3F] px-4 py-3 rounded text-sm min-w-[220px] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#F1CD31] hover:bg-yellow-400 text-[#2A2359] font-bold text-xs uppercase px-8 py-3 rounded transition"
            >
              INSCREVER
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="rounded text-[#3442B5] focus:ring-0 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-gray-300 cursor-pointer">
              Aceito os termos e condições
            </label>
          </div>

          {message && (
            <p className="text-xs text-green-400 font-bold mt-1">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
