import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ as FAQ_CONTENT } from '../lib/content';
import { Divider } from './ornaments/Divider';

export function FAQ() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-parchment py-24 md:py-32" aria-labelledby="faq-title">
      <div className="container-sacro max-w-3xl">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-center"
        >
          {FAQ_CONTENT.eyebrow}
        </motion.p>

        <motion.h2
          id="faq-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-teal-deep text-center mt-6 text-balance"
        >
          {FAQ_CONTENT.title}
        </motion.h2>

        <Divider className="my-12" />

        <ul className="glass-cream rounded-2xl divide-y divide-forest/10 px-6 md:px-8">
          {FAQ_CONTENT.items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full text-left flex items-center justify-between gap-6 py-6 group"
                >
                  <span className="font-display text-lg md:text-xl text-teal-deep group-hover:text-teal pr-4 text-balance">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full border border-brass/50 flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-brass text-teal-deep border-brass' : 'text-brass-dark'
                    }`}
                  >
                    {isOpen ? <Minus size={16} strokeWidth={1.6} /> : <Plus size={16} strokeWidth={1.6} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                      className="overflow-hidden"
                    >
                      <p className="font-serif text-lg text-charcoal/80 pb-6 pr-12 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
