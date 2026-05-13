import { motion, useReducedMotion } from 'framer-motion';
import { AUTHORITY } from '../lib/content';
import { Divider } from './ornaments/Divider';

export function Authority() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-parchment py-24 md:py-32" aria-labelledby="authority-title">
      <div className="container-sacro">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-center"
        >
          {AUTHORITY.eyebrow}
        </motion.p>

        <motion.h2
          id="authority-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-teal-deep text-center mt-6 text-balance"
        >
          {AUTHORITY.title}
        </motion.h2>

        <Divider className="my-12" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center max-w-6xl mx-auto">
          <motion.figure
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-brass/40 rounded-sm pointer-events-none" aria-hidden="true" />
              <img
                src={AUTHORITY.imageSrc}
                alt={AUTHORITY.imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-sm shadow-sacro"
              />
            </div>
            <figcaption className="font-cinzel text-[11px] tracking-ultra uppercase text-brass-dark text-center mt-6">
              {AUTHORITY.name}
            </figcaption>
          </motion.figure>

          <div className="md:col-span-7">
            <motion.h3
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl text-teal-deep leading-tight text-balance"
            >
              {AUTHORITY.name}
            </motion.h3>

            {AUTHORITY.bio.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
                className="prose-sacro mt-6 text-balance"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Pilares */}
            <div className="grid grid-cols-3 gap-3 mt-10">
              {AUTHORITY.pillars.map((p, idx) => (
                <motion.div
                  key={p}
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border border-brass/35 rounded-sm py-4 text-center"
                >
                  <span className="font-cinzel text-[11px] tracking-ultra uppercase text-brass-dark">
                    {p}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
