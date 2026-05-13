import { useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO } from '../lib/content';
import { Vine } from './ornaments/Vine';

/**
 * Hook: efeito magnético para CTAs.
 * Move o elemento até ~12px na direção do cursor com easing por spring.
 */
function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, handleMove, handleLeave };
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  // Magnetic para o CTA primário
  const magnet = useMagnetic(0.22);
  const transform = useTransform([magnet.springX, magnet.springY], ([mx, my]) => `translate(${mx}px, ${my}px)`);

  return (
    <section
      id="topo"
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 liquid-bg text-ivory overflow-hidden"
    >
      {/* Orbes de luz flutuantes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[12%] w-72 h-72 rounded-full bg-brass/15 blur-3xl float-slow" />
        <div className="absolute bottom-32 right-[8%] w-96 h-96 rounded-full bg-teal/25 blur-3xl float-medium" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-forest/10 blur-3xl" />
      </div>

      <div className="container-sacro relative">
        {/* Ícone gráfico da marca — substitui o eyebrow de texto */}
        <motion.div
          initial={fade(0).initial}
          animate={fade(0).animate}
          transition={fade(0).transition}
          whileHover={reduce ? undefined : { scale: 1.04, rotate: -1 }}
          className="flex justify-center"
        >
          <img
            src="/logo-icon-square.png"
            alt="A Casa Sobre a Rocha — casa, família e rocha"
            className="w-36 md:w-44 h-auto select-none float-slow drop-shadow-[0_8px_24px_rgba(45,63,43,0.45)]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </motion.div>

        <motion.div {...fade(0.1)} className="flex justify-center mt-4 mb-2">
          <Vine size={140} stroke="#DDB388" />
        </motion.div>

        <motion.h1
          {...fade(0.1)}
          className="display-title text-ivory text-center text-balance drop-shadow-[0_4px_30px_rgba(201,154,107,0.18)]"
        >
          {HERO.title}
        </motion.h1>

        <motion.p
          {...fade(0.2)}
          className="prose-sacro text-ivory/85 text-center max-w-3xl mx-auto mt-6 text-balance"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div {...fade(0.3)} className="flex justify-center mt-10">
          <div className="ornament-line max-w-[200px] w-full" />
        </motion.div>

        <motion.p
          {...fade(0.35)}
          className="font-caslon italic text-ivory/75 text-center max-w-2xl mx-auto mt-10 text-lg md:text-xl text-balance"
        >
          “{HERO.lead}”
        </motion.p>

        {/* Métricas em glass cards */}
        <motion.div
          {...fade(0.45)}
          className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto mt-14"
        >
          {HERO.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.08 }}
              whileHover={reduce ? undefined : { y: -4, scale: 1.02 }}
              className="glass rounded-2xl px-3 py-5 md:px-5 md:py-7 text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-brass-bright">{m.value}</div>
              <div className="small-caps text-ivory/70 mt-2 text-[10px] md:text-xs">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs com efeito magnético */}
        <motion.div
          {...fade(0.55)}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-14"
        >
          <motion.a
            ref={magnet.ref}
            href="#checkout"
            onMouseMove={reduce ? undefined : magnet.handleMove}
            onMouseLeave={reduce ? undefined : magnet.handleLeave}
            style={reduce ? undefined : { transform }}
            className="btn-glass group"
          >
            {HERO.primaryCta}
            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
          <a href="#produto" className="btn-glass-ghost">
            {HERO.ghostCta}
          </a>
        </motion.div>

        {/* Preço + garantia em glass capsule */}
        <motion.div
          {...fade(0.65)}
          className="mt-12 flex justify-center"
        >
          <div className="glass rounded-full px-6 py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <p className="font-caslon text-ivory text-sm md:text-base tracking-wide">
              {HERO.price}
            </p>
            <span aria-hidden className="hidden sm:block w-px h-5 bg-brass/40" />
            <p className="inline-flex items-center gap-2 small-caps text-brass-bright text-[11px]">
              <ShieldCheck size={14} strokeWidth={1.6} />
              {HERO.guarantee}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
