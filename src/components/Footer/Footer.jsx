
import Logo from '../common/Logo';
import {
  FOOTER_INSTITUTIONAL,
  FOOTER_HELP,
  PAYMENT_METHODS,
} from '../../data/navigation';

function LinkList({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">
        {title}
      </h4>

      <ul className="space-y-2 text-xs text-gray-700">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-700 transition hover:text-black hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white pt-12 pb-8 text-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-b border-gray-200 px-4 pb-12 md:grid-cols-4">
        {/* Logo e descrição */}
        <div>
          <Logo
            className="mb-4"
            textClass="text-2xl text-black"
            dotClass="mb-2 h-1.5 w-1.5"
          />

          <p className="mb-4 text-xs leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Links institucionais */}
        <LinkList
          title="Institucional"
          links={FOOTER_INSTITUTIONAL}
        />

        {/* Links de ajuda */}
        <LinkList
          title="Ajuda"
          links={FOOTER_HELP}
        />

        {/* Formas de pagamento */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">
            Formas de Pagamento
          </h4>

          <div className="flex flex-wrap gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="rounded border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-800"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

 
 <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 pt-6 text-center text-xs text-gray-600">
  <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
</div>
    </footer>
  );
}
