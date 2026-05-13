import { motion, useReducedMotion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { VALUE_STACK } from '../lib/content';
import { Divider } from './ornaments/Divider';

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });
}

export function ValueStack() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [displayTotal, setDisplayTotal] = useState<number>(VALUE_STACK.total);

  // Animação do contador: de 3885 → 497 quando entra na viewport
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplayTotal(497);
      return;
    }
    const controls = animate(VALUE_STACK.total, 497, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1] as const,
      onUpdate: (v) => setDisplayTotal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <section
      id="checkout"
      className="bg-parchment py-24 md:py-32"
      aria-labelledby="value-title"
    >
      <div className="container-sacro max-w-4xl">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-center"
        >
          {VALUE_STACK.eyebrow}
        </motion.p>

        <motion.h2
          id="value-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-teal-deep text-center mt-6 text-balance"
        >
          {VALUE_STACK.title}
        </motion.h2>

        <Divider className="my-12" />

        <div
          ref={ref}
          className="glass-cream rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Detalhe ornamental glass */}
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brass/20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-teal/15 blur-3xl pointer-events-none"
          />
          <ul>
            {VALUE_STACK.items.map((item, idx) => (
              <motion.li
                key={item.label}
                initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-baseline justify-between gap-4 py-4 border-b border-brass/20 last:border-b-0"
              >
                <span className="font-serif text-base md:text-lg text-charcoal/85 flex items-baseline gap-3">
                  <span className="w-2 h-2 bg-brass shrink-0" aria-hidden="true" />
                  {item.label}
                </span>
                <span className="font-cinzel text-sm md:text-base text-teal-deep whitespace-nowrap">
                  {formatBRL(item.value)}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t-2 border-brass/40 flex items-baseline justify-between gap-4">
            <span className="font-cinzel uppercase tracking-[0.18em] text-xs text-brass-dark">
              Total percebido
            </span>
            <span className="font-display text-2xl md:text-3xl text-charcoal/60 line-through decoration-rose decoration-[1.5px]">
              {formatBRL(VALUE_STACK.total)}
            </span>
          </div>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center liquid-bg text-ivory p-8 rounded-2xl relative overflow-hidden shadow-[0_20px_50px_-20px_rgba(10,44,42,0.4)]"
          >
            <p className="font-cinzel uppercase tracking-[0.22em] text-[10px] text-brass-bright">
              Hoje
            </p>
            <p
              className="display-title text-brass-bright mt-3"
              aria-live="polite"
            >
              {formatBRL(displayTotal)}
            </p>
            <p className="font-caslon text-ivory/85 text-base md:text-lg mt-3">
              {VALUE_STACK.todayInstallments}
            </p>
            <p className="font-caslon italic text-ivory/65 text-sm mt-1">
              ou {VALUE_STACK.todayUpfront}
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="font-caslon italic text-base md:text-lg text-charcoal/70 text-center mt-12 max-w-3xl mx-auto text-balance"
        >
          {VALUE_STACK.closing}
        </motion.p>

        <div className="flex justify-center mt-10">
          <a href="#checkout-pay" className="btn-glass !text-sm !px-10 !py-5 group">
            {VALUE_STACK.cta}
            <ArrowRight
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
