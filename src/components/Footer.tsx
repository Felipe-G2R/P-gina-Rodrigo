import { FOOTER, BRAND } from '../lib/content';
import { Divider } from './ornaments/Divider';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-darker text-ivory py-20 relative overflow-hidden">
      {/* Halo radial sutil de fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,154,107,0.10) 0%, transparent 55%)',
        }}
      />

      <div className="container-sacro text-center relative">
        {/* Logo PNG completa em card glass-cream */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <span
              aria-hidden
              className="absolute -inset-6 rounded-3xl bg-brass/25 blur-3xl"
            />
            <div className="relative glass-cream rounded-2xl p-4 md:p-5 float-slow">
              <img
                src="/logo.png"
                alt={BRAND.name}
                className="w-48 md:w-64 h-auto block"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <p className="font-caslon italic text-base md:text-lg text-ivory/70 mt-6 text-balance">
          {FOOTER.tagline}
        </p>

        <div className="my-10">
          <Divider variant="dark" />
        </div>

        <nav aria-label="Links do rodapé" className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-cinzel text-[11px] tracking-[0.22em] uppercase text-ivory/70 hover:text-brass-bright transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="font-caslon text-xs text-ivory/55 mt-10 tracking-wide">
          © {year} {FOOTER.brand} · Todos os direitos reservados
        </p>
        <p className="font-caslon italic text-xs text-ivory/45 mt-2">
          {FOOTER.credit}
        </p>
      </div>
    </footer>
  );
}
