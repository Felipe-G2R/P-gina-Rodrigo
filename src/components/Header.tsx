import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { NAV_LINKS, BRAND } from '../lib/content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Badge circular fixo no canto superior esquerdo — usa a logo PNG oficial */}
      <motion.a
        href="#topo"
        aria-label={BRAND.name}
        initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduce ? undefined : { scale: 1.05, rotate: -2 }}
        whileTap={reduce ? undefined : { scale: 0.96 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-[60] group block"
      >
        <span className="relative block">
          {/* ============= CAMADA 1 — Halos de luz (fora do círculo) ============= */}
          {/* Halo dourado externo difuso */}
          <span
            aria-hidden
            className="absolute -inset-6 rounded-full bg-brass/35 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"
          />
          {/* Halo verde sutil de apoio */}
          <span
            aria-hidden
            className="absolute -inset-4 rounded-full bg-forest/30 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"
          />

          {/* ============= CAMADA 2 — Anel ornamental em latão (gradiente cônico) ============= */}
          <span
            aria-hidden
            className="absolute -inset-[3px] rounded-full opacity-95"
            style={{
              background:
                'conic-gradient(from 140deg at 50% 50%, #DDB388 0deg, #C99A6B 90deg, #A6764B 180deg, #C99A6B 270deg, #DDB388 360deg)',
              boxShadow:
                '0 10px 28px -8px rgba(201,154,107,0.55), 0 0 0 1px rgba(166,118,75,0.4)',
            }}
          />

          {/* ============= CAMADA 3 — Disco glass principal (vidro líquido) ============= */}
          <span
            className="relative block w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden float-slow"
            style={{
              background:
                'radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,0.55) 0%, rgba(240,230,204,0.55) 30%, rgba(201,154,107,0.18) 70%, rgba(45,63,43,0.10) 100%)',
              backdropFilter: 'blur(14px) saturate(180%)',
              WebkitBackdropFilter: 'blur(14px) saturate(180%)',
              boxShadow:
                'inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 8px rgba(45,63,43,0.18), inset 0 0 0 1px rgba(255,255,255,0.35)',
            }}
          >
            {/* CAMADA 4 — Verniz superior (highlight diagonal de vidro polido) */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  'linear-gradient(155deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 28%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.06) 90%, rgba(0,0,0,0.12) 100%)',
              }}
            />

            {/* CAMADA 5 — Anel interno fino (separação ótica entre verniz e ícone) */}
            <span
              aria-hidden
              className="absolute inset-[6px] rounded-full pointer-events-none"
              style={{
                boxShadow:
                  'inset 0 0 0 1px rgba(166,118,75,0.30), inset 0 1px 0 rgba(255,255,255,0.45)',
              }}
            />

            {/* CAMADA 6 — Ícone PNG transparente, centralizado */}
            <img
              src="/logo-icon-square.png"
              alt={BRAND.name}
              className="relative w-full h-full object-contain p-[14%] drop-shadow-[0_2px_8px_rgba(45,63,43,0.45)] z-10"
              loading="eager"
              decoding="async"
              draggable={false}
            />

            {/* CAMADA 7 — Reflexo "lunar" superior (pequeno highlight branco) */}
            <span
              aria-hidden
              className="absolute top-[10%] left-[20%] w-[28%] h-[18%] rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)',
                filter: 'blur(2px)',
              }}
            />
          </span>
        </span>
        <span className="sr-only">{BRAND.name}</span>
      </motion.a>

      {/* Header de navegação (sem marca à esquerda — está no badge fixo) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-dark border-b border-brass/15'
            : 'bg-transparent'
        }`}
      >
        <div className="container-sacro flex items-center justify-end h-16 md:h-20 pl-24 md:pl-28">
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-cinzel text-[11px] tracking-[0.22em] uppercase text-ivory/80 hover:text-brass-bright transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block ml-8">
            <a href="#checkout" className="btn-glass !py-3 !px-5 !text-[10px]">
              Quero entrar
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-ivory p-2 rounded-full glass"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden glass-dark border-t border-brass/15"
              aria-label="Navegação móvel"
            >
              <div className="container-sacro py-6 flex flex-col gap-5">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="font-cinzel text-xs tracking-[0.22em] uppercase text-ivory/85 hover:text-brass-bright transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#checkout"
                  onClick={() => setOpen(false)}
                  className="btn-glass !w-full justify-center"
                >
                  Quero entrar
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
