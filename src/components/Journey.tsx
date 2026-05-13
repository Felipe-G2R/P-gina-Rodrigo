import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { JOURNEY } from '../lib/content';

export function Journey() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="jornada"
      className="bg-paper-dark text-ivory py-24 md:py-32"
      aria-labelledby="journey-title"
    >
      <div className="container-sacro">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brass-bright text-center"
        >
          {JOURNEY.eyebrow}
        </motion.p>

        <motion.h2
          id="journey-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-ivory text-center mt-6 text-balance"
        >
          {JOURNEY.title}
        </motion.h2>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-caslon italic text-lg md:text-xl text-ivory/70 text-center mt-4 text-balance"
        >
          {JOURNEY.subtitle}
        </motion.p>

        <div ref={ref} className="relative mt-20 max-w-3xl mx-auto">
          {/* Linha vertical */}
          <div
            className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-brass/20"
            aria-hidden="true"
          />
          <motion.div
            style={reduce ? { height: '100%' } : { height: lineHeight }}
            className="absolute left-6 md:left-10 top-0 w-px bg-brass-bright origin-top"
            aria-hidden="true"
          />

          <ol className="space-y-14 md:space-y-16">
            {JOURNEY.steps.map((step, idx) => (
              <motion.li
                key={step.number}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.65, delay: idx * 0.08 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Marcador */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 bg-teal-darker border border-brass rounded-full">
                  <span className="font-display text-brass-bright text-xl md:text-2xl">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-ivory leading-snug text-balance">
                  {step.title}
                </h3>
                <p className="font-caslon italic text-lg text-ivory/75 mt-4 max-w-xl text-balance">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
