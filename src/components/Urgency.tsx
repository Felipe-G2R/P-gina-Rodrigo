import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { URGENCY } from '../lib/content';
import { HeartCross } from './ornaments/HeartCross';

export function Urgency() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-paper-dark text-ivory py-24 md:py-32"
      aria-labelledby="urgency-title"
    >
      <div className="container-sacro max-w-4xl text-center">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brass-bright"
        >
          {URGENCY.eyebrow}
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mt-6"
        >
          <HeartCross size={64} stroke="#DDB388" />
        </motion.div>

        <motion.h2
          id="urgency-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl text-ivory leading-tight mt-8 text-balance"
        >
          {URGENCY.title}
        </motion.h2>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-caslon italic text-xl md:text-2xl text-ivory/75 mt-6 text-balance"
        >
          {URGENCY.subtitle}
        </motion.p>

        <div className="my-14 space-y-5">
          {URGENCY.paragraphs.map((p, idx) => (
            <motion.p
              key={p}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="font-serif text-lg md:text-xl text-ivory/85 text-balance"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className={`inline-block rounded-sm ${reduce ? '' : 'animate-pulse-soft'}`}
        >
          <a href="#checkout" className="btn-primary text-base px-10 py-5">
            {URGENCY.cta}
            <ArrowRight size={18} strokeWidth={1.6} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
