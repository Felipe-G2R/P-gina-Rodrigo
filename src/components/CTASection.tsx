import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CTA_SECTION } from '../lib/content';
import { Family } from './ornaments/Family';
import { Vine } from './ornaments/Vine';

export function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-paper-dark text-ivory py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="final-cta-title"
    >
      <div className="absolute inset-0 pointer-events-none opacity-15 flex items-end justify-center" aria-hidden="true">
        <Family size={420} stroke="#C99A6B" />
      </div>

      <div className="container-sacro max-w-3xl text-center relative">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Vine size={140} stroke="#C99A6B" />
        </motion.div>

        <motion.h2
          id="final-cta-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-title text-ivory mt-8 text-balance"
        >
          {CTA_SECTION.title}
        </motion.h2>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-caslon italic text-lg md:text-xl text-ivory/75 mt-6 text-balance"
        >
          {CTA_SECTION.subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a href="#checkout" className="btn-primary text-base px-10 py-5">
            {CTA_SECTION.primary}
            <ArrowRight size={18} strokeWidth={1.6} />
          </a>
          <a href="https://wa.me/" className="btn-ghost text-base" target="_blank" rel="noreferrer">
            <MessageCircle size={16} strokeWidth={1.6} />
            {CTA_SECTION.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
